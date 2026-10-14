"use client";

import { openCookieSettingsEvent } from "@/components/CookieConsent";

export function CookieSettingsButton() {
  return (
    <button
      className="footer-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(openCookieSettingsEvent))}
    >
      Cookie settings / Cookie設定
    </button>
  );
}
