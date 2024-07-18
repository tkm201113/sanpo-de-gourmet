class StoreDetailsController < ApplicationController
  def index
    @store_name = params[:name]
    @walking_time = params[:walking_time]
    @business_status = params[:business_status]
    @business_hours = params[:business_hours]
    @waiting_time = params[:waiting_time]
    @phone_number = params[:phone_number]
    @address = params[:address]
  end

  def review
  end
end