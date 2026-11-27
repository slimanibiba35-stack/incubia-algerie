#!/usr/bin/env bash
# Installs / updates the Incubia site on the VPS (Ubuntu/Debian). Run as root:
#   bash setup-vps.sh /root/incubia-site.tar.gz
# Safe to re-run for each new version: only the app folder is replaced.
set -euo pipefail
ARCHIVE="${1:-/root/incubia-site.tar.gz}"
APP=/opt/incubia
DOMAIN=incubia-algerie.com

# 1. Node.js 22, nginx, certbot
if ! command -v node >/dev/null || [ "$(node -v | cut -d. -f1)" != "v22" ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi
apt-get install -y nginx certbot python3-certbot-nginx

# 2. App files (the environment file /opt/incubia/.env is kept between versions)
id incubia >/dev/null 2>&1 || useradd --system --home "$APP" --shell /usr/sbin/nologin incubia
mkdir -p "$APP"
rm -rf "$APP/app.new" && mkdir "$APP/app.new"
tar -xzf "$ARCHIVE" -C "$APP/app.new"
rm -rf "$APP/app.old"; [ -d "$APP/app" ] && mv "$APP/app" "$APP/app.old"
mv "$APP/app.new" "$APP/app"
if [ ! -f "$APP/.env" ]; then
  cat > "$APP/.env" <<'EOF'
# Fill these in (nano /opt/incubia/.env), then: systemctl restart incubia
RESEND_API_KEY=
ADMIN_EMAIL=contact@incubia-algerie.com
EMAIL_FROM=Incubia Algérie <contact@incubia-algerie.com>
EMAIL_REPLY_TO=contact@incubia-algerie.com
EOF
fi
chmod 600 "$APP/.env"
chown -R incubia:incubia "$APP"

# 3. Service (port 3000, local only; nginx is the public entry)
cat > /etc/systemd/system/incubia.service <<EOF
[Unit]
Description=Incubia website (Next.js)
After=network.target

[Service]
User=incubia
WorkingDirectory=$APP/app
EnvironmentFile=$APP/.env
Environment=NODE_ENV=production PORT=3000 HOSTNAME=127.0.0.1
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
systemctl enable incubia >/dev/null
systemctl restart incubia

# 4. nginx (HTTP for now; certbot adds HTTPS once the DNS points here)
cat > /etc/nginx/sites-available/incubia <<EOF
server {
  listen 80;
  listen [::]:80;
  server_name $DOMAIN www.$DOMAIN;
  client_max_body_size 10m;
  location /_next/static/ { alias $APP/app/.next/static/; expires 1y; add_header Cache-Control "public, immutable"; }
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
  }
}
EOF
ln -sf /etc/nginx/sites-available/incubia /etc/nginx/sites-enabled/incubia
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

sleep 3
curl -s -o /dev/null -w "Site: HTTP %{http_code}\n" -H "Host: $DOMAIN" http://127.0.0.1/
echo "Done. After the DNS points to this server, run:"
echo "  certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect -m contact@$DOMAIN --agree-tos -n"
