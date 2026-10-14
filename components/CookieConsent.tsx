"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState, useSyncExternalStore } from "react";

const consentStorageKey = "umaji-village-guide-analytics-consent";
const consentChangedEvent = "umaji:analytics-consent-changed";
export const openCookieSettingsEvent = "umaji:open-cookie-settings";

type Consent = "accepted" | "rejected" | null;

function updateAnalyticsPermission(choice: Exclude<Consent, null>) {
  const analyticsWindow = window as Window & Record<string, boolean>;
  analyticsWindow["ga-disable-G-40Z67K4F4K"] = choice === "rejected";

  if (choice === "rejected") {
    const domainParts = window.location.hostname.split(".");
    const domainCandidates = domainParts.map((_, index) =>
      `.${domainParts.slice(index).join(".")}`,
    );

    document.cookie.split(";").forEach((cookie) => {
      const cookieName = cookie.split("=")[0]?.trim();

      if (!cookieName || !/^_ga(?:_|$)/.test(cookieName)) {
        return;
      }

      document.cookie = `${cookieName}=; Max-Age=0; Path=/; SameSite=Lax`;
      domainCandidates.forEach((domain) => {
        document.cookie = `${cookieName}=; Max-Age=0; Path=/; Domain=${domain}; SameSite=Lax`;
      });
    });
  }
}

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(consentChangedEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(consentChangedEvent, onStoreChange);
  };
}

function getConsentSnapshot(): Consent {
  const storedConsent = window.localStorage.getItem(consentStorageKey);

  return storedConsent === "accepted" || storedConsent === "rejected"
    ? storedConsent
    : null;
}

function getServerConsentSnapshot(): Consent {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const openSettings = () => setIsSettingsOpen(true);
    window.addEventListener(openCookieSettingsEvent, openSettings);

    return () => window.removeEventListener(openCookieSettingsEvent, openSettings);
  }, []);

  useEffect(() => {
    if (consent) {
      updateAnalyticsPermission(consent);
    }
  }, [consent]);

  const saveConsent = (choice: Exclude<Consent, null>) => {
    updateAnalyticsPermission(choice);
    window.localStorage.setItem(consentStorageKey, choice);

    if (consent === "accepted" && choice === "rejected") {
      window.location.reload();
      return;
    }

    window.dispatchEvent(new Event(consentChangedEvent));
    setIsSettingsOpen(false);
  };

  const showBanner = consent === null || isSettingsOpen;

  return (
    <>
      {consent === "accepted" && (
        <GoogleAnalytics gaId="G-40Z67K4F4K" />
      )}

      {showBanner && (
        <section
          className="cookie-banner"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
          <div className="cookie-banner-copy">
            <h2 id="cookie-banner-title">Analytics cookies</h2>
            <p id="cookie-banner-description">
              We use Google Analytics only with your permission to understand
              visits and improve this guide. You can accept or reject analytics
              cookies, and change your choice later.
            </p>
            <p lang="ja">
              訪問状況を把握し、このガイドを改善するため、同意をいただいた場合のみGoogle
              Analyticsを使用します。選択は後から変更できます。
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" onClick={() => saveConsent("rejected")}>
              Reject / 拒否
            </button>
            <button type="button" onClick={() => saveConsent("accepted")}>
              Accept / 同意
            </button>
          </div>
        </section>
      )}
    </>
  );
}
