# 翻訳ファイルのロードパスを設定
I18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]

# デフォルトロケールを日本語に設定
I18n.default_locale = :ja