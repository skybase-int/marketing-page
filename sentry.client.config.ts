import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Environment configuration
  environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || 'development',

  // Performance Monitoring
  // Capture 10% of transactions for performance monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Session Replay
  // Capture 10% of sessions, 100% of sessions with errors
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Web Vitals are captured automatically

  // Debug mode for development
  debug: process.env.NODE_ENV !== 'production',

  // Release tracking
  release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,

  // Filter out noisy errors
  ignoreErrors: [
    // Browser extensions
    /^chrome-extension:\/\//,
    /^moz-extension:\/\//,
    // Network errors
    'Network Error',
    'Failed to fetch',
    'Load failed',
    // User aborted requests
    'AbortError',
    'The operation was aborted'
  ],

  // Configure the built-in replay integration
  // Note: replayIntegration is added automatically by @sentry/nextjs v10+
  // Use integrations callback to modify its settings
  integrations: defaultIntegrations => {
    return defaultIntegrations.map(integration => {
      if (integration.name === 'Replay') {
        return Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true
        });
      }
      return integration;
    });
  },

  // Before sending, you can filter or modify events
  beforeSend(event, hint) {
    // Don't send events in development unless explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_SENTRY_DEBUG) {
      return null;
    }
    return event;
  }
});
