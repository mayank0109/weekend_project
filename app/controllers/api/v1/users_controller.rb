# frozen_string_literal: true

class Api::V1::UsersController < Api::V1::BaseController
  skip_before_action :authenticate_user!, only: :create
  skip_before_action :authenticate_user_using_x_auth_token, only: :create

  before_action :load_user!, only: %i[show destroy]

  def show
    respond_with_json(@user)
  end

  def create
    user = User.create!(user_params)
    if user.referrer.present?
      ReferredUser.find_by(email: user_params[:email]).destroy!
    end
    respond_with_success(
      t("signup_successful"),
      :ok,
      { user: user, auth_token: user.authentication_token }
    )
  end

  def destroy
    @user.destroy!
    respond_with_success(t("successfully_deleted", count: 1, entity: "User"))
  end

  private

    def load_user!
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :password, :password_confirmation, :referred_by_id)
    end
end