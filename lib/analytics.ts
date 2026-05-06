/**
 * Analytics event tracking for PawWalk landing page.
 * Sends events to Plausible or Google Analytics 4.
 */

export interface AnalyticsEvent {
  name: string;
  props?: Record<string, string | number | boolean>;
}

/**
 * Track a CTA click event.
 * Call this when the "Join the PawWalk Waitlist" button is clicked.
 */
export function trackCtaClick(source?: string): void {
  if (typeof window === "undefined") return;

  const event: AnalyticsEvent = {
    name: "cta_click",
    props: {
      button: "join_waitlist",
      source: source || "hero",
    },
  };

  sendAnalyticsEvent(event);
}

/**
 * Track an email signup event.
 * Call this after successful form submission.
 */
export function trackEmailSignup(
  email: string,
  firstName?: string,
  utmSource?: string,
  utmMedium?: string,
  utmCampaign?: string
): void {
  if (typeof window === "undefined") return;

  const event: AnalyticsEvent = {
    name: "email_sign_up",
    props: {
      email: maskEmail(email),
      firstName: firstName ? "provided" : "not_provided",
      utmSource: utmSource || "direct",
      utmMedium: utmMedium || "direct",
      utmCampaign: utmCampaign || "direct",
    },
  };

  sendAnalyticsEvent(event);
}

/**
 * Track form submission errors.
 */
export function trackFormError(errorMessage: string): void {
  if (typeof window === "undefined") return;

  const event: AnalyticsEvent = {
    name: "form_error",
    props: {
      error: errorMessage,
    },
  };

  sendAnalyticsEvent(event);
}

/**
 * Send event to analytics provider.
 * Supports both Plausible and Google Analytics 4.
 */
function sendAnalyticsEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // Plausible Analytics
  if (window.plausible) {
    window.plausible(event.name, { props: event.props });
  }

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", event.name, event.props);
  }

  // Fallback: log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event.name, event.props);
  }
}

/**
 * Mask email for privacy in analytics.
 * Converts "user@example.com" to "u***@example.com".
 */
function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "***@***";
  const masked = local.charAt(0) + "***";
  return `${masked}@${domain}`;
}

/**
 * Extend window object to include analytics globals.
 */
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}
