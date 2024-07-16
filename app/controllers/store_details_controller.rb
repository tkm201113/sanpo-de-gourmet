class StoreDetailsController < ApplicationController

  def index
    @store_name = "○○"
    @walking_time = "○○分"
    @business_status = "○○中"
    @business_hours = "○○:○○ ～ ○○:○○"
    @waiting_time = "○○分待ち"
    @phone_number = "○○-○○-○○"
    @user_name = "○○"
    @review_text = "○○"
  end

  def review
  end
end