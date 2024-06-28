class StoreDetailsController < ApplicationController
  def index
    @store_name = "○○"
    @walking_time = "○○分"
    @business_status = "○○中"
    @business_hours = "○○:○○ ～ ○○:○○"
    @waiting_time = "○○分待ち"
    @phone_number = "○○-○○-○○"
  end

  def review
    # レビューの処理をここに書く
  end
end
