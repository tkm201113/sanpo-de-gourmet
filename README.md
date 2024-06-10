■サービス概要
「散歩 de グルメ」は、指定した時間内に歩いて行けるお店をピックアップするアプリです。

現在地からの距離と時間を考慮して、おすすめのグルメスポットを表示します。

■ このサービスへの思い・作りたい理由
僕がこのサービスを思いついたのは、毎日の散歩中に新しいお店を発見する楽しさを感じたからです。

お気に入りのカフェやレストランを見つけた時の喜びを、もっと多くの人と共有したいと思いました。

また、健康のために散歩をする人が増えている中で、ただ歩くだけでなく新しい楽しみを提供したいという思いがあります。

■ ユーザー層について
【地元住民】
普段通り過ぎてしまう近所のお店を再発見し、食事のバリエーションを増やしたい

【ビジネスマン・ビジネスウーマン】
ランチタイムや仕事帰りに短時間で食事を済ませたいが、新しいお店も試してみたい

【観光客】
限られた時間で、地元の美味しいお店を効率的に見つけたい

【子育て中の主婦・主夫】
子供と一緒に短時間で安心して行けるお店を見つけたい

【高齢者】
健康のために散歩を楽しむ中で、安全に歩いて行ける範囲で新しいお店を発見したい

■サービスの利用イメージ
1.ユーザーがアプリを開き、指定した時間（例えば15分、30分）内で歩いて行けるお店を検索します。

2.アプリは現在地と時間を元に、最適なルートとおすすめのお店を表示します。

3.ユーザーはその中から気になるお店を選び、口コミや写真を見て訪れるかどうかを決めます。

4.食事後、レビューを投稿して他のユーザーと共有します。

■ ユーザーの獲得について
Runteqコミュニティ、Xでの宣伝

■ サービスの差別化ポイント・推しポイント
【カスタマイズされたおすすめ】
ユーザーの過去の行動や好みに基づいて、個別化されたお店のおすすめを提供する。

例えば、ユーザーが過去に訪れたお店のジャンルや評価を参考にすることで、より精度の高いおすすめができる。

【詳細なレビューと評価システム】
ユーザーが投稿するレビューに対して、具体的な評価項目（例えば、サービス、価格、雰囲気など）を追加する。

これにより、単純な星評価よりも詳細なフィードバックが得られる。

【特定のイベントやプロモーション情報】
お店が開催するイベントや特別なプロモーション情報をリアルタイムで表示する機能を追加する。

これによって、ユーザーは通常の営業時間外でも興味深い情報を得ることができる。

【コミュニティ機能】
ユーザー同士が交流できるコミュニティ機能を提供する。

例えば、特定のエリアのおすすめのお店についてディスカッションできるフォーラムやチャット機能を追加する。

【特定の食事制限やアレルギー対応】
ユーザーが自分の食事制限やアレルギー情報を登録でき、それに基づいたお店のフィルタリング機能を提供する。

例えば、ビーガン対応のお店やグルテンフリーのお店を簡単に見つけられるようになる。

【インタラクティブなマップ表示】
ユーザーが自身の好みに合わせてマップをカスタマイズできる。

例えば、特定のジャンル（和食、洋食、中華など）のお店だけを表示したり、訪れたことのあるお店を色分けしたりすることができる。

■ 機能候補
MVPリリース時に作っていたいもの:

・現在地周辺のお店表示

・指定時間内で行けるお店検索機能

・ユーザーレビューと写真の投稿機能

・お気に入り登録機能


本リリースまでに作っていたいもの:

・お店の詳細情報（営業時間、メニューなど）

・カスタム散歩ルート作成機能

・ソーシャルシェア機能

・リアルタイム混雑情報

■ 機能の実装方針予定
【指定時間内で行けるお店検索機能】
Google Maps APIを利用して現在地を取得し、指定した時間内で歩いて行ける範囲を計算する

【リアルタイムの位置情報連動】
同じくGoogle Maps APIを使って、周辺のお店情報を表示する

【ユーザーレビューと写真の投稿機能】
AWS S3を使って写真を保存し、RailsのActive Storageで管理する

【リアルタイム混雑情報】
外部API（例えば、Google Places API）を使って、お店のリアルタイム混雑

■ 使用予定の技術スタック
【フロントエンド】
JavaScript (ES6+)
React: インタラクティブなUI構築
Redux: 状態管理
Tailwind CSS: スタイリング
Mapbox GL JS: インタラクティブなマップ表示
axios: API通信

【バックエンド】
Rubyバージョン: 3.1.4
Railsバージョン: 7.1.3.2

【Gem】
geocoder: 現在地の取得や住所検索に使用
devise: ユーザー認証機能
pundit: 権限管理
active_storage: ユーザーレビューや写真の保存
aws-sdk-s3: Active StorageでAWS S3を使用するため
httparty: 外部API（Google Maps APIやGoogle Places API）との通信

【デプロイ】
Heroku: 初期デプロイおよびスケーリング
AWS (S3): 画像やファイルのストレージ
CircleCI: CI/CDパイプラインの自動化

【その他の技術・サービス】
Google Maps API - 現在地取得と周辺のお店情報の表示
Google Places API - お店の詳細情報とリアルタイム混雑情報の取得
Algolia - 高速な検索機能

### 画面遷移図
Figma：https://www.figma.com/design/mLwJ4qoCb21wHBN8k2LhVx/Untitled?node-id=0-1&t=MKsRD7FmkZ8x2Snf-1

### READMEに記載した機能
- [x] ユーザー登録機能
- [x] ログイン機能
- [x] パスワード変更機能
- [x] メールアドレス変更機能
- [x] コメント投稿機能
- [x] コメント閲覧機能（未ログインでも閲覧可能）
- [x] コメント編集機能
- [x] コメント削除機能
- [x] 詳細なレビューと評価システム機能
- [x] コミュニティ機能
- [x] 特定の食事制限やアレルギー対応機能
- [x] インタラクティブなマップ表示機能
- [x] 現在地周辺のお店表示機能
- [x] 指定時間内で行けるお店検索機能機能
- [x] ユーザーレビューと写真の投稿機能
- [x] お気に入り登録機能
- [x] お店の詳細情報機能
- [x] カスタム散歩ルート作成機能
- [x] ソーシャルシェア登録機能
- [x] リアルタイム混雑情報機能

### 未ログインでも閲覧または利用できるページ
以下の項目は適切に未ログインでも閲覧または利用できる画面遷移になっているか？
- [x] レビュー・コミュニティ閲覧機能（未ログインでも閲覧可能）
- [x] 特定の食事制限やアレルギー対応機能
- [x] インタラクティブなマップ表示機能
- [x] 現在地周辺のお店表示機能
- [x] 指定時間内で行けるお店検索機能機能
- [x] お店の詳細情報機能
- [x] カスタム散歩ルート作成機能
- [x] ソーシャルシェア登録機能
- [x] リアルタイム混雑情報機能

### メールアドレス・パスワード変更確認項目
直接変更できるものではなく、一旦メールなどを介して専用のページで変更する画面遷移になっているか？
- [x] メールアドレス
- [x] パスワード