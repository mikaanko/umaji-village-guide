import type { Metadata } from "next";
import Link from "next/link";
import { CookieConsent } from "@/components/CookieConsent";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umaji Village Travel Guide",
  description: "A draft English travel guide for Umaji Village, Kochi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">
            Umaji Village
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/spots">Spots</Link>
            <Link href="/map">Map</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <p>Umaji Village Guide</p>
            <nav aria-label="Footer navigation">
              <Link href="/privacy">Privacy Policy / プライバシーポリシー</Link>
              <CookieSettingsButton />
            </nav>
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
