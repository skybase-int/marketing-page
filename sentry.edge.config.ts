// This file configures the initialization of Sentry for edge features (middleware, edge routes).
// The config here will be used whenever one of the edge features is loaded.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Environment configuration
  environment: process.env.SENTRY_ENVIRONMENT || 'development',

  // Performance Monitoring - 100% on edge for better visibility
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Release tracking
  release: process.env.SENTRY_RELEASE,

  // Before sending, filter or modify events
  beforeSend(event, hint) {
    // Don't send events in development unless explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.SENTRY_DEBUG) {
      return null;
    }
    return event;
  }
});
