# Yamisskey Theme Collection

[yami.ski](https://yami.ski) と [na.yami.ski](https://na.yami.ski) 向けの公式カラーテーマコレクションです。

## ディレクトリ構造

```
yamisskey-theme/
├── misskey/
│   ├── yami.ski/         # yami.ski用の公式テーマ
│   │   ├── NGO.json      # ライトテーマ
│   │   └── DXM.json      # ダークテーマ
│   ├── na.yami.ski/      # na.yami.ski用の公式テーマ
│   │   ├── AQUANGEL.json # ライトテーマ
│   │   └── LANDMINE.json # ダークテーマ
└── jitsi/                # Jitsi Meet用カスタマイズ
    ├── custom.css
    ├── _variables.scss
    └── jitsi-custom-head.html
```

## テーマ一覧

### Misskey用テーマ

#### yami.ski用公式テーマ

##### NGO (ライトテーマ)
- **説明**: NEEDY GIRL OVERDOSEのWindoseをモチーフにしたレトロポップなライトテーマ
- **ベース**: light
- **特徴**: 紫をベースにした明るく優しい配色
- **ファイル**: [misskey/yami.ski/NGO.json](misskey/yami.ski/NGO.json)

##### DXM (ダークテーマ)
- **説明**: Dextromethorphanをモチーフにした幻想的なダークテーマ
- **ベース**: dark
- **特徴**: 紫のアクセントが映える落ち着いたダークテーマ
- **ファイル**: [misskey/yami.ski/DXM.json](misskey/yami.ski/DXM.json)

#### na.yami.ski用公式テーマ

##### AQUANGEL (ライトテーマ)
- **説明**: 天使界隈水色系をモチーフにした儚いライトテーマ
- **ベース**: light
- **特徴**: 爽やかな水色をベースにした明るいテーマ
- **ファイル**: [misskey/na.yami.ski/AQUANGEL.json](misskey/na.yami.ski/AQUANGEL.json)

#### LANDMINE (ダークテーマ)
- **説明**: 地雷系ファッションをモチーフにしたダークテーマ
- **ベース**: dark
- **特徴**: ピンク系のアクセントカラーが特徴的なダークテーマ
- **ファイル**: [misskey/na.yami.ski/LANDMINE.json](misskey/na.yami.ski/LANDMINE.json)

### Jitsi Meet用テーマ
Jitsi Meetのカスタマイズファイルは [jitsi/](jitsi/) ディレクトリに含まれています。

**含まれるファイル:**
- `custom.css` - カスタムスタイルシート
- `_variables.scss` - SCSS変数定義
- `jitsi-custom-head.html` - カスタムヘッダー

**特徴:**
- Yamisskey風のグラデーションボタン
- 統一されたブランドカラー（紫系）
- モダンで洗練されたUI
- レスポンシブ対応

## インストール方法

### Misskeyテーマのインストール

1. 使用したいテーマファイル（`.json`）の内容をコピー
2. Misskeyの設定から「テーマ」を開く
3. 「テーマをインストール」を選択
4. コピーした内容をペースト

または、テーマファイルのURLを直接インポートすることもできます。

## 著者

[@hitalin@yami.ski](https://yami.ski/@hitalin)

## ライセンス

このテーマコレクションは自由に利用・改変できます。

## 貢献

テーマの改善提案やバグ報告は Issues または Pull Request でお願いします。
