class StoreDetailsController < ApplicationController
  def index
    @store_name = params[:name]
    @walking_time = params[:walking_time]
    @business_status = params[:business_status]
    @business_hours = params[:business_hours]
    @waiting_time = params[:waiting_time]
    @phone_number = params[:phone_number]
    @address = params[:address]
    @reviews = Review.where(store_name: @store_name)
  end

  def review
    @review = Review.new(review_params)
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:name, :rating, :review, :service, :price, :atmosphere, :store_name)
  end
end
