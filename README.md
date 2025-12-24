# Yamisskey Theme Collection

[yami.ski](https://yami.ski) 向けの公式カラーテーマコレクションです。

## ディレクトリ構造

```
yamisskey-theme/
├── misskey/
│   ├── NGO.json      # ライトテーマ
│   └── DXM.json      # ダークテーマ
└── jitsi/            # Jitsi Meet用カスタマイズ
    ├── custom.css
    ├── _variables.scss
    └── jitsi-custom-head.html
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
