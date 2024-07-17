class Users::RegistrationsController < Devise::RegistrationsController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      puts "ユーザー名: #{@user.name}"
      puts "メールアドレス: #{@user.email}"
      puts "パスワード: #{params[:user][:password]}"
      redirect_to home_path, notice: 'ユーザー登録が完了しました。'
    else
      puts "ユーザー登録に失敗しました。"
      puts @user.errors.full_messages
      filter_errors
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def filter_errors
    unique_errors = @user.errors.messages.transform_values(&:uniq)
    @user.errors.clear
    unique_errors.each do |attribute, messages|
      messages.each do |message|
        @user.errors.add(attribute, message)
      end
    end
  end
end