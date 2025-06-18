/**
 * Yamisskey Meet Interface Configuration
 * Privacy-focused and aesthetic improvements
 */

var interfaceConfig = {
    // === ブランディング ===
    APP_NAME: 'やみーと',
    PROVIDER_NAME: 'やみすきー',

    // === プライバシー配慮 ===
    DEFAULT_REMOTE_DISPLAY_NAME: '匿名やみみん',
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,  // 参加/退室通知を無効化（プライバシー）
    DISABLE_PRESENCE_STATUS: true,           // プレゼンス状態を非表示（プライバシー）

    // === 音声ビジュアル ===
    AUDIO_LEVEL_PRIMARY_COLOR: 'rgba(150, 107, 255, 0.8)',
    AUDIO_LEVEL_SECONDARY_COLOR: 'rgba(150, 107, 255, 0.4)',

    // === 画面共有・ビデオ ===
    AUTO_PIN_LATEST_SCREEN_SHARE: 'remote-only',

    // === ブランドロゴ ===
    BRAND_WATERMARK_LINK: 'https://yami.ski',
    DEFAULT_LOGO_URL: 'images/watermark.svg',
    DEFAULT_WELCOME_PAGE_LOGO_URL: 'images/watermark.svg',

    // === 終了ページ ===
    CLOSE_PAGE_GUEST_HINT: false,

    // === 背景・デザイン ===
    DEFAULT_BACKGROUND: 'rgba(19, 14, 38, 0.94)',

    // === インジケーター（見た目重視） ===
    DISABLE_DOMINANT_SPEAKER_INDICATOR: false,      // 主発言者表示は残す

    // === 字幕・転写（プライバシー配慮） ===
    DISABLE_TRANSCRIPTION_SUBTITLES: true,          // 字幕機能を無効化（プライバシー）

    // === ビデオ背景 ===
    DISABLE_VIDEO_BACKGROUND: false,                // ぼかし背景は有効（見た目向上）

    // === ウェルカムページ表示 ===
    DISPLAY_WELCOME_FOOTER: true,
    DISPLAY_WELCOME_PAGE_ADDITIONAL_CARD: false,     // シンプルに
    DISPLAY_WELCOME_PAGE_CONTENT: false,             // シンプルに
    DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,

    // === 機能制御 ===
    ENABLE_DIAL_OUT: false,                         // ダイヤルアウト無効（プライバシー）

    // === フィルムストリップ ===
    FILM_STRIP_MAX_HEIGHT: 120,

    // === 部屋名生成 ===
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: true,       // ランダム部屋名でプライバシー向上

    // === 招待プロンプト ===
    HIDE_INVITE_MORE_HEADER: true,                  // 招待プロンプト非表示（シンプル化）

    // === 外部リンク（Yamisskey化） ===
    JITSI_WATERMARK_LINK: 'https://yami.ski',

    // === 言語検出 ===
    LANG_DETECTION: true,

    // === サムネイル比率 ===
    LOCAL_THUMBNAIL_RATIO: 16 / 9,

    // === ズーム係数 ===
    MAXIMUM_ZOOMING_COEFFICIENT: 1.3,

    // === モバイルアプリプロモ（プライバシー配慮） ===
    MOBILE_APP_PROMO: false,                        // モバイルアプリ宣伝無効

    // === ブラウザ最適化 ===
    OPTIMAL_BROWSERS: [ 'chrome', 'chromium', 'firefox', 'electron', 'safari', 'webkit' ],

    // === ポリシーロゴ ===
    POLICY_LOGO: null,

    // === 最近のリスト（プライバシー配慮） ===
    RECENT_LIST_ENABLED: false,                     // 最近の会議履歴無効（プライバシー）

    // === サムネイル比率 ===
    REMOTE_THUMBNAIL_RATIO: 1,

    // === 設定セクション（プライバシー重視） ===
    SETTINGS_SECTIONS: [ 'devices', 'language', 'profile', 'sounds' ],  // calendar除去でプライバシー向上

    // === 共有機能（プライバシー配慮） ===
    SHARING_FEATURES: ['url'],                      // URLのみ、メール等は除去

    // === ウォーターマーク表示 ===
    SHOW_BRAND_WATERMARK: true,                     // Yamisskeyブランド表示

    // === Chrome拡張バナー ===
    SHOW_CHROME_EXTENSION_BANNER: false,            // 広告的要素を削除

    // === Jitsiウォーターマーク ===
    SHOW_JITSI_WATERMARK: false,                    // Jitsiブランド非表示

    // === Powered By ===
    SHOW_POWERED_BY: false,                         // シンプル化

    // === プロモーション終了ページ ===
    SHOW_PROMOTIONAL_CLOSE_PAGE: false,             // 広告的要素削除

    // === サポートURL（Yamisskey化） ===
    SUPPORT_URL: 'https://hub.yami.ski',

    // === 非対応ブラウザ ===
    UNSUPPORTED_BROWSERS: [],

    // === 縦フィルムストリップ ===
    VERTICAL_FILMSTRIP: true,

    // === ビデオレイアウト ===
    VIDEO_LAYOUT_FIT: 'both',

    // === ビデオ品質ラベル ===
    VIDEO_QUALITY_LABEL_DISABLED: false,            // 品質表示は残す（ユーザビリティ）

    // === タイル表示列数 ===
    TILE_VIEW_MAX_COLUMNS: 4,                       // 見やすさ重視で4列に制限

    // === その他の設定 ===
    makeJsonParserHappy: 'even if last key had a trailing comma'
};