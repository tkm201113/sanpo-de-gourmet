# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user!
  def new
  end
  
  def create
  end
  
  def destroy
  end
end