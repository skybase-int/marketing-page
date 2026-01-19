// This file configures the initialization of Sentry on the server.
// The config here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Environment configuration
  environment: process.env.SENTRY_ENVIRONMENT || 'development',

  // Performance Monitoring - 100% on server for better visibility
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Debug mode for development
  debug: process.env.NODE_ENV !== 'production',

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
