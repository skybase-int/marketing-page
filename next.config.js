/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live/ https://vercel.com https://static.cloudflareinsights.com;
    connect-src 'self' 
      https://cloudflareinsights.com 
      https://cloudflare-eth.com 
      https://staging-api.sky.money 
      https://api.sky.money 
      https://api.ipify.org
      https://vercel.live/
      https://vercel.com
      wss://ws-us3.pusher.com
      *.pusher.com
      *.pusherapp.com;
    style-src 'self' https://vercel.live 'unsafe-inline';
    img-src 'self' data: blob: https://vercel.live https://vercel.com;
    font-src 'self' https://vercel.live https://assets.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
    frame-src 'self'
      https://vercel.live/
      https://vercel.com
`;

const nextConfig = {
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
