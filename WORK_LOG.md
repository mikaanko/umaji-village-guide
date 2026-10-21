# Umaji Village Guide 作業引き継ぎ

## 2026年10月21日

### 確認済みの作業状況

- 作業ブランチ: `feature/analytics-privacy`
- 最新コミット: `fca35d2`（`うまパン紹介文とイラストマップボタンの表示を改善`）
- GitHubの `origin/feature/analytics-privacy` へpush済み
- ローカルとGitHubのHEADが一致し、作業ツリーがクリーンであることを確認済み
- Vercel Preview: `https://umaji-village-guide-c94067caw-mikas-projects-24ab46b4.vercel.app`
- 上記Previewはコミット `fca35d2` に対応し、状態が `READY`、Production対象ではないことを確認済み
- Productionは旧 `main` の状態を維持しており、今回の作業ブランチの変更は未反映

### GA4・Cookie同意の確認

- GA4の正式な測定IDは `G-40Z67K4F4K`
- PreviewでCookieの同意・拒否が機能することを確認済み
- Cookie同意後にGA4のリアルタイム計測を確認済み
- 拒否時はGA4による計測を行わない構成を維持

### プライバシーポリシー

- 運営者名を `Umaji Bakery（うまじのパン屋）` に正式決定し、反映済み
- 問い合わせ先も `Umaji Bakery（うまじのパン屋）` とし、確認済みの電話番号を反映済み

### 施設情報・公開文章の整理

- Mikaさんの公開済みYouTube動画の概要欄と、サイトの営業時間・定休日・料金・運行日を施設ごとに照合
- 照合済みの営業時間、定休日、運行日、入場無料・予約不要などの確認済み情報を維持
- 正式公開向けに仮文章を自然な英語へ整理
- 全施設へHours・Fee・Notesを強制表示せず、施設ごとに必要な項目だけを表示する構成へ変更
- 根拠のない `To be confirmed / 要確認` と不要なHours・Fee表示を削除
- うまじのパン屋の紹介文を、焼きたてのパンと来訪者への温かな歓迎を伝える文章へ改善
- スポット詳細ページのイラストマップボタンを、英語を上段、日本語を下段にした中央揃えへ改善
- 既存の施設写真、地図、リンク、確認済みの施設情報は維持

### 今後の予定（未実施）

- 最新PreviewをPC・スマートフォンで最終確認する
- 最終確認で問題がなければ、`main` への反映と本番公開を検討する
- mainへのマージ、ProductionへのDeploy・Promoteはまだ行わない
- 馬路村役場の写真は、11月1日の「ゆずはじまる祭」終了後に撮り直す予定
- 役場写真を差し替えるまでは、撮影時に外装工事の足場が写っている現行写真を維持する

## 2026年10月15日

### 作業状況

- 作業ブランチ: `feature/analytics-privacy`
- 施設情報更新とやまなみ食堂の掲載終了を保存したコミット: `7489421`（`施設情報を更新しやまなみ食堂の掲載を終了`）
- 作業完了後、GitHubの `feature/analytics-privacy` へpushして自宅Mac miniで継続できる状態にする
- `main`には未マージ
- Vercel Productionには未反映。作業ブランチのpushでPreviewが作成される可能性はあるが、Productionは変更しない

### 施設情報の更新

- ゆずの森加工場: 営業時間、年末年始休業、入場無料、個人見学の予約不要を英語で反映
- ゆずの森直売所: 8:30〜17:00と年末年始休業を英語で反映
- うまじのパン屋: 水〜日曜日9:00〜18:00、月・火曜日定休、売り切れ時の早期閉店を英語で反映
- 馬路温泉: 日帰り入浴、レストラン昼夜営業時間・L.O.、チェックイン・チェックアウトを英語で反映
- まかいちょって家: 9:00〜17:00と年末年始休業を英語で反映
- 馬路森林鉄道: 8:30〜16:30、日曜・祝日運行、8月は特別運行期間中のみ毎日運行と明記
- 森林鉄道インクライン: 8:30〜16:30、日曜・祝日運行、8月毎日運行を英語で反映
- 確認できない料金は推測せず、既存の「要確認」表示を維持
- レンタサイクルの料金・時間・台数・利用条件は変更していない

### やまなみ食堂の掲載終了

- `data/spots.ts` からスポット定義を削除し、スポット一覧と個別詳細ページの生成対象から除外
- 地図ページのホットスポットと詳細リンク一覧から削除
- 公開対象のトップページ、一覧、地図、関連リンクに「yamanami / やまなみ」の参照が残っていないことを確認
- 旧詳細URL `/spots/yamanami-shokudo` は404になることを確認
- 関連写真3枚は削除せず `public/images/spots/` に保持
- 非公開の地図設計資料とラフSVGは履歴資料として保持

### 地図画像の局所修正

- Gitの元画像（コミット `f74fc7d`）を基準に使用
- 「Yamanami Shokudo / やまなみ食堂」のラベルとアイコン周辺だけを森の背景で補完
- 最終画像のサイズは `1448 x 1086`
- 変更ピクセルは19,851個（全体の1.2624%）
- 変更範囲は `x=731〜958, y=351〜440`
- 指定領域外の変更が0ピクセルであることを元画像とのピクセル比較で確認
- 以前の画像全体が再描画された版は不採用
- 回復が必要な場合、Git履歴の `f74fc7d:public/images/map/umaji-village-guide-map.png` から元画像を取得できる

### 検証結果

- `npm run lint`: 成功
- `npm run typecheck`: 成功
- `npm run build`: 成功
- 全19ページの静的生成に成功
- スポット詳細ページは12件で、やまなみ食堂のみ生成対象から減っている
- `git diff --check`: 問題なし
- 運営者情報の仮表記、GA4、Cookie同意機能に変更なし

### 自宅Mac miniでの再開手順

既存のcloneがある場合は、現在の変更を上書きしないよう先に `git status` を確認する。

```bash
cd /path/to/umaji-village-guide
git status
git fetch origin
git switch feature/analytics-privacy
git pull --ff-only
npm ci
npm run dev
```

新規にcloneする場合:

```bash
git clone https://github.com/mikaanko/umaji-village-guide.git
cd umaji-village-guide
git switch --track origin/feature/analytics-privacy
npm ci
npm run dev
```

### 次回作業の注意事項

- 必ず `feature/analytics-privacy` で作業し、`main` に直接コミットしない
- 地図画像は指定領域外0ピクセル変更の最終版を維持し、画像全体をAIで再描画した版に戻さない
- 運営者情報は引き続き `Umaji Village Guide（temporary / 仮）`。正式情報が確定するまで変更しない
- GA4測定ID `G-40Z67K4F4K` とCookie同意機能を変更しない
- VercelのProductionブランチは `main`。作業ブランチのPreviewとProductionを取り違えない
- 開発サーバー終了時は `Ctrl+C` で停止し、ポート3000にプロセスが残っていないことを確認

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
