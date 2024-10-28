FROM node:18-bookworm

EXPOSE 3000
WORKDIR /app

ARG API_URL \
    NEXT_PUBLIC_AUTH_URL \
    PNPM_VERSION \
    NEXT_PUBLIC_TERMS_LINK \
    NEXT_PUBLIC_FOOTER_LINKS

ENV API_URL=$API_URL \
    NEXT_PUBLIC_AUTH_URL=$NEXT_PUBLIC_AUTH_URL \ 
    PNPM_VERSION=$PNPM_VERSION \
    NEXT_PUBLIC_TERMS_LINK=$NEXT_PUBLIC_TERMS_LINK \
    NEXT_PUBLIC_FOOTER_LINKS=$NEXT_PUBLIC_FOOTER_LINKS

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=secret,id=NPM_TOKEN \
    corepack enable && \
    NPM_TOKEN=$(cat /run/secrets/NPM_TOKEN) pnpm install

COPY . .
RUN pnpm build

CMD ["pnpm", "start"]
