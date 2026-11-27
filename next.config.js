/** @type {import('next').NextConfig} */

// Redirects, "gone" URLs and security headers are defined here (not in vercel.json) so they also apply
// when the site runs outside Vercel (VPS with `next start`). Values copied from the live site, 26/11/2026.
// /tarifs is a live page again, so it is no longer in this list.
// ('/wp-:path*' from vercel.json is not valid in Next.js; '/wp-:path' covers /wp-login.php etc.)
const GONE = ['/actualites', '/wp-:path', '/wp-admin/:path*', '/wp-content/:path*', '/wp-includes/:path*']

const nextConfig = {
    // Self-contained server bundle for the VPS (node .next/standalone/server.js)
    output: 'standalone',

    async redirects() {
        return [
            // Pages removed from the site (live redirects, permanent)
            { source: '/postuler', destination: '/contact', permanent: true },
            { source: '/accompagnement', destination: '/acceleration-entreprises', permanent: true },
            { source: '/services/coworking', destination: '/contact', permanent: true },
            { source: '/services/domiciliation', destination: '/contact', permanent: true },
            { source: '/services/creation', destination: '/guide-startup', permanent: true },
            { source: '/services/financement', destination: '/guide-startup', permanent: true },
            { source: '/services/mvp-building', destination: '/services/site-web', permanent: true },
            { source: '/services/saas-platform', destination: '/services/site-web', permanent: true },
            // Temporary redirects (live uses 307)
            { source: '/guide-startup', destination: '/guide-entreprises', permanent: false },
            { source: '/services/formation/b2b', destination: '/services/formation#b2b', permanent: false },
            { source: '/services/formation/catalogue', destination: '/services/formation#catalogue', permanent: false },
            { source: '/services/formation/mentorat', destination: '/services/formation#mentorat', permanent: false },
        ]
    },

    async rewrites() {
        return GONE.map(source => ({ source, destination: '/api/gone' }))
    },

    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                    { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
                            "style-src 'self' 'unsafe-inline'",
                            "img-src 'self' data: https: blob:",
                            "font-src 'self' data:",
                            "connect-src 'self' https://www.google-analytics.com",
                            "frame-src 'self' https://www.google.com https://maps.google.com",
                            "frame-ancestors 'none'",
                        ].join('; '),
                    },
                ],
            },
        ]
    },

    images: {
        formats: ['image/avif', 'image/webp'],
    },

    compress: true,
    productionBrowserSourceMaps: false,
    poweredByHeader: false,

    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
