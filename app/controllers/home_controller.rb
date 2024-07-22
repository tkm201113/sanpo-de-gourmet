class HomeController < ApplicationController
  def index
    @search_params = {
      walking_time: params[:walking_time] || 15 # default to 15 minutes if not provided
    }
  end
end