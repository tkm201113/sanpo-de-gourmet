Geocoder.configure(
  lookup: :google,
  api_key: ENV['GOOGLE_MAPS_API_KEY'],  # 必ず環境変数にAPIキーを設定すること
  timeout: 5,
  units: :km
)