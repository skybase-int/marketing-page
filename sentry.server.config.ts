import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Environment configuration
  environment: process.env.SENTRY_ENVIRONMENT || 'development',

  // Performance Monitoring
  // Capture 10% of transactions for performance monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Debug mode for development
  debug: process.env.NODE_ENV !== 'production',

  // Release tracking
  release: process.env.SENTRY_RELEASE,

  // Filter out noisy errors
  ignoreErrors: [
    // Network errors that are often transient
    'ECONNRESET',
    'ECONNREFUSED',
    'ETIMEDOUT'
  ],

  // Before sending, you can filter or modify events
  beforeSend(event, hint) {
    // Don't send events in development unless explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.SENTRY_DEBUG) {
      return null;
    }
    return event;
  }
});
