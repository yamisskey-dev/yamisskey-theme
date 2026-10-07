# Yamisskey Theme Collection

[yami.ski](https://yami.ski) 向けの公式カラーテーマコレクションです。

## ディレクトリ構造

```
yamisskey-theme/
├── misskey/
│   ├── NGO.json      # ライトテーマ
│   └── DXM.json      # ダークテーマ
├── uptime-kuma/      # Uptime Kuma用カスタマイズ
│   └── custom.css
└── ctfd/             # CTFd用カスタマイズ
    ├── theme-header.html
    ├── theme-footer.html
    └── theme-settings.json
```

## テーマ一覧

### Misskey用テーマ

#### NGO (ライトテーマ)
- **説明**: NEEDY GIRL OVERDOSEのWindoseをモチーフにしたレトロポップなライトテーマ
- **ベース**: light
- **特徴**: 紫をベースにした明るく優しい配色
- **ファイル**: [misskey/NGO.json](misskey/NGO.json)

#### DXM (ダークテーマ)
- **説明**: Dextromethorphanをモチーフにした幻想的なダークテーマ
- **ベース**: dark
- **特徴**: 紫のアクセントが映える落ち着いたダークテーマ
- **ファイル**: [misskey/DXM.json](misskey/DXM.json)

#### ブランドカラー（グラデーション）

Uptime Kuma / CTFd など Misskey 外のテーマが参照している palette です。
Misskey 本体の `compile()` はベーステーマに無いプロパティを捨てるため、
テーマ JSON には含めず、ここに記録しています。

| 用途 | DXM | NGO |
|------|-----|-----|
| ボタン / ヘッダ | `linear-gradient(135deg, #B32DB6, #966BFF, #4B38A5)` | `linear-gradient(172deg, #FF9DFF, #A398FF 45%, #7D66FF)` |
| ナビゲーション | `linear-gradient(135deg, #4B28B5, #3B59C9, #2B8AC9)` | `linear-gradient(98deg, #E5B8FF, #DB9DFF 40%, #D192FF)` |
| 背景 | `linear-gradient(135deg, #B32DB6, #966BFF, #4B38A5)` | `linear-gradient(145deg, #FFF2FF, #F5F2FF)` |
| 入力欄 | `linear-gradient(135deg, #2D2D2D, #242424)` | `linear-gradient(135deg, #FFF2FF, #F8F5FF)` |

### Uptime Kuma用テーマ
Uptime Kumaのカスタマイズファイルは [uptime-kuma/](uptime-kuma/) ディレクトリに含まれています。

**含まれるファイル:**
- `custom.css` - カスタムスタイルシート

**特徴:**
- Yamisskey/Jitsiテーマと統一された紫系グラデーション
- ダークテーマベースのモダンなUI
- ステータスバッジ・モニターリストのカスタマイズ
- ボタン・フォーム・モーダルの統一スタイル
- Misskey DXMテーマの色を忠実に再現

### CTFd用テーマ
CTFdのカスタマイズファイルは [ctfd/](ctfd/) ディレクトリに含まれています。

**含まれるファイル:**
- `theme-header.html` - Theme Header用コード
- `theme-footer.html` - Theme Footer用コード
- `theme-settings.json` - Theme Settings用設定

**特徴:**
- Misskey DXMテーマベースのダークテーマ
- チャレンジカード・スコアボードのカスタマイズ
- グラデーションボタン
- 統一されたブランドカラー（紫系）

## インストール方法

### Misskeyテーマのインストール

1. 使用したいテーマファイル（`.json`）の内容をコピー
2. Misskeyの設定から「テーマ」を開く
3. 「テーマをインストール」を選択
4. コピーした内容をペースト

または、テーマファイルのURLを直接インポートすることもできます。

### Uptime Kumaテーマのインストール

1. Uptime Kumaの設定を開く
2. 「外観」→「カスタムCSS」を選択
3. `uptime-kuma/custom.css`の内容をペースト
4. 保存して適用

### CTFdテーマのインストール

1. CTFd管理画面の「Configuration」→「Appearance」を開く
2. 「Primary Color」を`#966BFF`に設定
3. 「Theme Header」に`ctfd/theme-header.html`の内容をペースト
4. 「Theme Footer」に`ctfd/theme-footer.html`の内容をペースト
5. 「Theme Settings」に`ctfd/theme-settings.json`の内容をペースト
6. 「Build CSS」をクリックして適用

## 著者

[@hitalin@yami.ski](https://yami.ski/@hitalin)

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) を参照してください。

## 貢献

テーマの改善提案やバグ報告は Issues または Pull Request でお願いします。
