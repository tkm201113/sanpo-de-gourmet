GOOGLE_MAPS_API_KEY = Rails.application.credentials.google_maps_api_key

Geocoder.configure(
  lookup: :google,
  api_key: Rails.application.credentials.dig(:google_maps, :api_key),
  use_https: true,
  timeout: 5
)