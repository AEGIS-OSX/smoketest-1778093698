/**
 * UTM parameter capture and parsing for PawWalk landing page.
 * Extracts utm_source, utm_medium, utm_campaign from URL query params.
 */

export interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
}

/**
 * Parse UTM parameters from the current URL.
 * Returns an object with utm_source, utm_medium, utm_campaign, etc.
 */
export function parseUtmParams(): UtmParams {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return {
    source: params.get("utm_source") || undefined,
    medium: params.get("utm_medium") || undefined,
    campaign: params.get("utm_campaign") || undefined,
    content: params.get("utm_content") || undefined,
    term: params.get("utm_term") || undefined,
  };
}

/**
 * Store UTM parameters in sessionStorage for later retrieval.
 * Useful for tracking across page navigations.
 */
export function storeUtmParams(params: UtmParams): void {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem("utm_params", JSON.stringify(params));
  } catch (error) {
    console.warn("Failed to store UTM params:", error);
  }
}

/**
 * Retrieve stored UTM parameters from sessionStorage.
 */
export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = sessionStorage.getItem("utm_params");
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.warn("Failed to retrieve UTM params:", error);
    return {};
  }
}

/**
 * Get UTM parameters, preferring URL params over stored values.
 */
export function getUtmParams(): UtmParams {
  const urlParams = parseUtmParams();
  const storedParams = getStoredUtmParams();

  // Merge: URL params take precedence, fall back to stored
  return {
    source: urlParams.source || storedParams.source,
    medium: urlParams.medium || storedParams.medium,
    campaign: urlParams.campaign || storedParams.campaign,
    content: urlParams.content || storedParams.content,
    term: urlParams.term || storedParams.term,
  };
}
