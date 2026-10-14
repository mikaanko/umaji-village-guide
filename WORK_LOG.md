# Umaji Village Guide 作業引き継ぎ

## 2026年10月14日

### 作業状況

- 作業ブランチ: `feature/analytics-privacy`
- 今回の実装内容を保存したコミット: `5971e74`（`GA4・Cookie同意対応と依存関係を更新`）
- GitHubの同名作業ブランチへpush済み
- `main`には未マージ
- VercelのProductionには未反映。本番サイトは従来の状態を維持している
- 作業ブランチのpushによりVercel Previewのみ自動作成された（Production対象ではない）

### 実施内容

#### Google Analytics 4

- GA4をサイト全体へ導入した
- 測定ID: `G-40Z67K4F4K`
- Next.js向けの `@next/third-parties/google` を使用
- YouTubeなどからのUTMパラメータ付きURLを保持したまま計測できる構成
- Googleタグが重複しないことを確認済み

#### 依存パッケージのセキュリティ更新

- Next.jsと関連パッケージを互換性のある修正版へ更新した
- Next.js: `16.4.0`
- `eslint-config-next`: `16.4.0`
- `@next/third-parties`: `16.4.0`
- PostCSS: `8.5.30`
- `baseline-browser-mapping`、`nanoid`、`source-map-js`、`sharp`などの推移的依存関係も更新した
- `npm audit fix --force` は使用していない
- `npm audit --omit=dev` は `0 vulnerabilities`
- 開発依存まで含む通常の `npm audit` には、lint関連の推移的依存関係に警告が残る。解消案がNext.js関連パッケージの破壊的なダウングレードを要求するため、無理に適用していない

#### プライバシーポリシー

- `/privacy` に英語主体・日本語併記のプライバシーポリシーを追加した
- 全ページ共通フッターからアクセス可能にした
- 運営者情報を `config/site.ts` に分離し、後から変更しやすい構成にした

#### Cookie同意機能

- 初回訪問時にCookie同意バナーを表示する
- 「Accept / 同意」と「Reject / 拒否」を同等の選びやすさで表示する
- AcceptされるまでGA4を読み込まない
- Reject時はGA4による計測を行わない
- Accept後にRejectへ変更した場合は解析Cookieを削除し、GA4を読み込まない状態でページを再読み込みする
- フッターの「Cookie settings / Cookie設定」から選択を変更できる
- 同意状態はブラウザのローカルストレージへ保存する

### 検証結果

- `npm run lint`: 成功
- `npm run typecheck`: 成功
- `npm run build`: 成功
- `/privacy` を含む全ルートのビルドに成功
- PC・スマートフォン表示で主要ページを確認し、横方向の表示崩れなし
- 表示領域内の画像読み込み失敗なし
- ブラウザのエラー・警告なし
- 未同意時: GA4ローダー 0件
- Accept時: 測定ID `G-40Z67K4F4K` のGA4ローダー 1件
- Reject時およびAccept後にRejectへ変更した後: GA4ローダー 0件
- UTMパラメータ付きURLで、パラメータを維持したまま表示・同意操作できることを確認済み

### 未確定事項

- 正式な運営主体は未確認
- 現在の運営者表記は `Umaji Village Guide（temporary / 仮）`
- 問い合わせ先は未確認であり、架空の連絡先は設定していない
- 正式情報が決まり次第、`config/site.ts` とプライバシーポリシーの表示内容を更新する
- 公開前に、確定した運営主体によるプライバシーポリシーの内容確認が必要

### 今後の作業予定

1. 正式な運営主体と問い合わせ先を確認する
2. `config/site.ts` の仮情報を正式情報へ差し替える
3. 作業ブランチのVercel Previewで最終確認する
4. 必要に応じてプライバシーポリシーの法務・運営確認を受ける
5. 問題がなければPull Requestを作成し、レビュー後に `main` へマージする
6. `main` マージ後のProduction反映とGA4リアルタイム計測を確認する

## 別のMacから再開する手順と注意事項

### 新しくcloneする場合

```bash
git clone https://github.com/mikaanko/umaji-village-guide.git
cd umaji-village-guide
git fetch origin
git switch --track origin/feature/analytics-privacy
npm ci
git status
npm run dev
```

### すでにclone済みの場合

作業中の変更がないことを `git status` で確認してから取得する。未コミット変更がある場合は上書きせず、先に内容を確認する。

```bash
cd /path/to/umaji-village-guide
git status
git fetch origin
git switch feature/analytics-privacy
git pull --ff-only
npm ci
npm run dev
```

### 注意事項

- 作業は必ず `feature/analytics-privacy` 上で再開し、誤って `main` に直接コミットしない
- `git pull` 前に未コミット変更がないことを確認する
- 依存関係は `package-lock.json` に合わせて `npm ci` で復元する
- VercelのProductionブランチは `main`。作業ブランチのpushはPreviewを作成するが、本番反映は行わない
- 正式な運営者情報と問い合わせ先が確定するまで、推測した情報を追加しない
- GA4測定ID `G-40Z67K4F4K` を変更しない
- 開発サーバー終了時は `Ctrl+C` で停止し、ポート3000にプロセスが残っていないことを確認する
