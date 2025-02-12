FROM node:20-bookworm-slim

EXPOSE 3000
WORKDIR /app

ARG API_URL \
    NEXT_COOKIE3_SITE_ID \
    NEXT_PUBLIC_AUTH_URL \
    NEXT_PUBLIC_FOOTER_LINKS \
    NEXT_PUBLIC_TERMS_LINK \
    PNPM_VERSION

ENV API_URL=$API_URL \
    NEXT_COOKIE3_SITE_ID=$NEXT_COOKIE3_SITE_ID \
    NEXT_PUBLIC_AUTH_URL=$NEXT_PUBLIC_AUTH_URL \
    NEXT_PUBLIC_FOOTER_LINKS=$NEXT_PUBLIC_FOOTER_LINKS \
    NEXT_PUBLIC_TERMS_LINK=$NEXT_PUBLIC_TERMS_LINK \
    PNPM_VERSION=$PNPM_VERSION

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=secret,id=NPM_TOKEN \
    npm install -g corepack@latest && \
    corepack enable && \
    NPM_TOKEN=$(cat /run/secrets/NPM_TOKEN) pnpm install

COPY . .
RUN pnpm build

CMD ["pnpm", "start"]
