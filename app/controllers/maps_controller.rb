class MapsController < ApplicationController
  def index
  end

  def search
    query = params[:query]
    response = HTTParty.get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
      query: {
        key: GOOGLE_MAPS_API_KEY,
        query: query
      }
    })
    @results = response.parsed_response["results"]
    render :index
  end
end