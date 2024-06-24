require 'net/http'
require 'json'

class RouteService
  def self.get_route(start_coords, end_coords)
    api_key = Rails.application.secrets.openroute_api_key
    url = URI("https://api.openrouteservice.org/v2/directions/foot-walking?api_key=#{api_key}&start=#{start_coords.join(',')}&end=#{end_coords.join(',')}")

    response = Net::HTTP.get(url)
    JSON.parse(response)
  end
end

def search_yelp(term, location)
  api_key = Rails.application.secrets.yelp_api_key
  url = URI("https://api.yelp.com/v3/businesses/search?term=#{term}&location=#{location}")

  request = Net::HTTP::Get.new(url)
  request["Authorization"] = "Bearer #{api_key}"

  response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) { |http| http.request(request) }
  JSON.parse(response.body)
end

def get_foursquare_venue_details(venue_id)
  api_key = Rails.application.secrets.foursquare_api_key
  url = URI("https://api.foursquare.com/v2/venues/#{venue_id}?client_id=#{api_key}")

  response = Net::HTTP.get(url)
  JSON.parse(response)
end