class SearchController < ApplicationController
  def new
  end

  def create
    search_params = {
      walking_time: params[:walking_time],
      mood: params[:mood],
      allergy: params[:allergy],
      allergy_details: params[:allergy_details],
      diet: params[:diet],
      diet_details: params[:diet_details]
    }

    redirect_to home_path(search_params)
  end
end