import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-title privacy-title">
        <p className="eyebrow">Privacy &amp; data</p>
        <h1>Privacy Policy</h1>
        <p lang="ja" className="privacy-title-ja">
          プライバシーポリシー
        </p>
        <p>Last updated: October 21, 2026 / 最終更新日：2026年10月21日</p>
      </section>

      <article className="privacy-content">
        <section>
          <h2>1. About this policy / 本ポリシーについて</h2>
          <p>
            This policy explains how {siteConfig.name} handles information when
            you use this website. This website is operated by{" "}
            {siteConfig.operator.nameEn} ({siteConfig.operator.nameJa}).
          </p>
          <p lang="ja">
            本ポリシーは、本サイトの利用時に取り扱う情報について説明するものです。本サイトの運営者は、
            {siteConfig.operator.nameJa}（{siteConfig.operator.nameEn}）です。
          </p>
        </section>

        <section>
          <h2>2. Information we collect</h2>
          <p>
            If you accept analytics cookies, Google Analytics may collect usage
            data such as pages viewed, approximate location, device and browser
            information, referral source, and campaign parameters included in a
            URL, such as UTM parameters. We do not ask you to provide personal
            information through this website at this time.
          </p>
          <p lang="ja">
            解析Cookieに同意した場合、Google Analyticsにより閲覧ページ、おおよその地域、端末・ブラウザ情報、参照元、URLに含まれるUTMパラメータなどが収集されることがあります。現在、本サイト上で個人情報の入力は求めていません。
          </p>
        </section>

        <section>
          <h2>3. Google Analytics</h2>
          <p>
            We use Google Analytics 4 to understand how visitors find and use
            the website and to improve its content. Google Analytics is loaded
            only after you select “Accept.” If you select “Reject,” Google
            Analytics is not loaded and no analytics measurement is performed
            by this website.
          </p>
          <p lang="ja">
            本サイトでは、流入元や閲覧状況を把握し内容を改善するため、Google Analytics 4を使用します。「Accept / 同意」を選択した場合のみ読み込まれ、「Reject / 拒否」を選択した場合は本サイトによるアクセス解析を行いません。
          </p>
          <p>
            Google processes analytics data under its own terms and privacy
            policy. Data may be processed on servers outside your country or
            region.
          </p>
          <p lang="ja">
            解析データはGoogleの規約とプライバシーポリシーに基づいて処理され、居住国・地域外のサーバーで処理される場合があります。
          </p>
        </section>

        <section>
          <h2>4. Cookies and your choice</h2>
          <p>
            Your analytics choice is saved in your browser so that the website
            can remember it. You can reopen “Cookie settings” in the footer at
            any time and change your choice. Rejecting analytics does not limit
            access to the website. Changing from acceptance to rejection stops
            future analytics collection from this website, but does not delete
            data that was collected before the change.
          </p>
          <p lang="ja">
            選択内容はブラウザ内に保存されます。フッターの「Cookie settings / Cookie設定」からいつでも変更できます。解析を拒否しても、本サイトの閲覧機能は制限されません。同意後に拒否へ変更した場合、それ以降の解析を停止しますが、変更前に収集されたデータは削除されません。
          </p>
        </section>

        <section>
          <h2>5. Data sharing</h2>
          <p>
            Analytics data is shared with Google as the service provider. We do
            not sell personal information. We may disclose information if
            required by applicable law.
          </p>
          <p lang="ja">
            解析データはサービス提供者であるGoogleと共有されます。個人情報を販売することはありません。法令に基づき開示が必要な場合を除きます。
          </p>
        </section>

        <section>
          <h2>6. Changes to this policy</h2>
          <p>
            We may update this policy when the website, analytics setup, or
            applicable requirements change. The latest version will be posted
            on this page with its update date.
          </p>
          <p lang="ja">
            サイトや解析設定、適用される要件の変更に応じて、本ポリシーを更新することがあります。最新版と更新日はこのページに掲載します。
          </p>
        </section>

        <section>
          <h2>7. Contact / お問い合わせ</h2>
          <p>
            Contact: {siteConfig.operator.nameEn}
            <br />
            Telephone: {siteConfig.operator.phone}
          </p>
          <p lang="ja">
            お問い合わせ先：{siteConfig.operator.nameJa}
            <br />
            電話：{siteConfig.operator.phone}
          </p>
        </section>
      </article>
    </main>
  );
}
