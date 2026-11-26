export const analyticsConsentStorageKey =
  "umaji-village-guide-analytics-consent";

export function hasAnalyticsConsent() {
  try {
    return window.localStorage.getItem(analyticsConsentStorageKey) === "accepted";
  } catch {
    return false;
  }
}
