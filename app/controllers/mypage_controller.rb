class MypageController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    @reviews = @user.reviews
  end
end
