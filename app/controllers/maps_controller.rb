require 'net/http'
require 'json'

class MapsController < ApplicationController
  def index
    @restaurants = get_nearby_restaurants
  end

  private

  def get_nearby_restaurants
    api_key = ENV['GOOGLE_MAPS_API_KEY']
    location = "35.6895,139.6917"
    radius = 500
    type = "restaurant"
    
    url = URI("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{location}&radius=#{radius}&type=#{type}&key=#{api_key}")
    
    response = Net::HTTP.get(url)
    results = JSON.parse(response)["results"]

    results.map do |result|
      {
        name: result["name"],
        address: result["vicinity"]
      }
    end
  end
end