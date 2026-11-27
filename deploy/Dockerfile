# Runs the prebuilt Next.js standalone bundle (built on the dev PC, Linux sharp included).
FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0 NEXT_TELEMETRY_DISABLED=1
COPY --chown=node:node site/ ./
USER node
EXPOSE 3000
CMD ["node", "server.js"]
