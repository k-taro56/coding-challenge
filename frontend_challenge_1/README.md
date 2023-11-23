## 課題1. 
ENECHANGEには法人向け電力比較サービス「エネチェンジBiz」というサービスがあります。
[参考](https://enechange.jp/biz/input)

あなたはENECHANGEのフロントエンドエンジニアとして、デザイナーが制作した新しい「エネチェンジBiz」サイトのコーディングを行ってください。
（デザインは `frontend_challenge1/files/enechange-challenge.sketch` を参照してください）

実装を行う際には主に下記の点に注意し進めてください。
- 必ずしもピクセルパーフェクトにコーディングをする必要はありません。
- 実装する上で不明な点があれば気兼ねなくご質問ください。
- CSS は SASS かSCSS で実装してください。
- IE11以上、Edge 17以上で耐えうるよう実装してください。
- PC / SP はそれぞれ同じ html を使っていただいて構いません。 例えば、JS でユーザーエージェントの判別を実装し、 PC / SP で別 CSS を読み込む実装でもOKですし、それぞれ別々にコーディングをしていただいてもOKです。
- SP はデバイス幅が広がると、その分横幅が広がるように	実装してください。各種細かい指示はいたしませんが、極力レイアウト崩れが無いように実装してください。
- 各種の実装において、JS ライブラリを使っていただいても構いませんが、パフォーマンスや汎用性の観点でライブラリを選択するよう注意してください。
- ファーストビューに設置されているフォームは、下記条件でフロントバリデーションを実装してください。html5のブラウザバリデーションではなく、JS での実装をしてください。
  - 貴社名
    - 空の場合「正しく入力してください」という文面のエラーが出る
  - ご担当者
    - 空の場合「正しく入力してください」という文面のエラーが出る
  - 電話番号
    - 空の場合「正しく入力してください」という文面のエラーが出る
  - メールアドレス
    - メールアドレスの形式でない場合「正しいメールアドレスの形式で入力してください」という文面のエラーが出る
  - 「ご契約中の電力会社」を選択すると、それに対応した「都道府県」のみが選択肢として出るように実装してください。対応表は下記に示します。
    - なお、都道府県は47都道府県すべてを設ける必要はなく、下記表に記載がある都道府県が設定されていればよいです。

| ご契約中の電力会社 | 都道府県 |
|:-----------|:------------|
| 東京電力       | 東京都        |
| 北海道電力       | 北海道        |
| 東北電力       | 宮城県        |
| 中部電力       | 長野県        |
| 北陸電力       | 富山県        |
| 関西電力       | 大阪府        |
| 中国電力       | 広島県        |
| 四国電力       | 徳島県        |
| 九州電力       | 福岡県        |
| 沖縄電力       | 沖縄県        |

## 課題2. ( 必須ではありません )
FLOCSS や SMACSS などの CSS 設計思想を活用しサイトのコーディング経験がある場合、実際に組み上げたサイトを挙げて、運用のしやすさという観点に於いてどのような工夫を行ったのか教えてください。公表が困難な場合、それがわかるものを挙げていただき(文章でも実際のコードでも大丈夫です)、説明するかたちで構いません。

## 提出形式
### 課題1
* このレポジトリを fork する。
* `challenges` 内に自分のアカウント名でフォルダを作り、その中に html 等を作成する。
* このレポジトリへの PR を作成する。

なお github-pages 等で作成したページが閲覧できる環境を作成してくださるのが好ましいです。

### 課題2
提出形式に指定はありません。（提出フォーマット例: KeynoteやMSパワーポイント、Google スライドなど）