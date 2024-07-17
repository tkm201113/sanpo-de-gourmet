class Users::SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user!
  
  def create
    Rails.logger.debug "Params: #{params.inspect}"
    Rails.logger.debug "Resource name: #{resource_name}"

    user_params = params[:user]
    if user_params.nil?
      flash[:alert] = 'ログイン情報が正しく送信されませんでした。'
      return render :new
    end

    user = User.find_by(email: user_params[:email])
    if user&.valid_password?(user_params[:password])
      sign_in(user)
      redirect_to home_path, notice: 'ログインに成功しました。'
    else
      flash[:alert] = 'メールアドレスまたはパスワードが違います。'
      render :new
    end
  end
  
  def destroy
    sign_out(current_user)
    redirect_to root_path, notice: 'ログアウトしました。'
  end
en