# frozen_string_literal: true

class Api::V1::UsersController < Api::V1::BaseController
  skip_before_action :authenticate_user!, only: :create
  skip_before_action :authenticate_user_using_x_auth_token, only: :create

  before_action :load_user!, only: %i[show destroy]

  def show
    respond_with_json(@user)
  end

  def create
    user = User.new(user_params)
    if user.save
      respond_with_success(
        t("signup_successful"),
        :ok,
        { user: user, auth_token: user.authentication_token }
      )
    else
      respond_with_error(user.errors.full_messages.to_sentence)
    end
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