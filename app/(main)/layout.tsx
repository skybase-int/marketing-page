import '../globals.css';
import { Providers } from '../providers';
import type { Metadata } from 'next';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import { PageAnimatePresence } from '@/app/components/PageAnimatePresence';
import { circleStdClassName } from '@/app/lib/fonts';
import { Header } from '@/app/components/Header';
import { ExternalLinkModal } from '@/app/components/ExternalLinkModal';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'sky.money',
  description: 'Your future in DeFi starts now'
};

export default async function RootLayout({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.markfi.xyz/scripts/analytics/0.11.24/cookie3.analytics.min.js"
          integrity="sha384-ihnQ09PGDbDPthGB3QoQ2Heg2RwQIDyWkHkqxMzq91RPeP8OmydAZbQLgAakAOfI"
          crossOrigin="anonymous"
          async
          strategy="lazyOnload"
          site-id={process.env.NEXT_COOKIE3_SITE_ID || ''}
        />
      </head>
      <body className={`flex min-h-screen flex-col overflow-x-hidden ${circleStdClassName}`}>
        <Providers>
          <ExternalLinkModal />
          <Header />
          {process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK == 'true' ? (
            <PageAnimatePresence>{children}</PageAnimatePresence>
          ) : (
            <AuthWrapper>
              <PageAnimatePresence>{children}</PageAnimatePresence>
            </AuthWrapper>
          )}
        </Providers>
      </body>
    </html>
  );
}
