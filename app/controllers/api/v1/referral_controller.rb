# frozen_string_literal: true

class Api::V1::ReferralController < Api::V1::BaseController

  def create
    referred_user = Referral.new(email: referal_params[:email], user: current_user)
    if referred_user.save
      respond_with_success("Referal email has been sent successfully")
    else
      respond_with_error(referred_user.errors.full_messages.to_sentence)
    end
  end

  def index
    referrals = current_user.referrals.select(:email, :id)
    referred_users = current_user.referred_users.select(:id, :email)
    render json: { referred_users: referred_users,
                    referrals: referrals}, status: :ok
  end

  private

    def referal_params
      params.require(:referral).permit(:email)
    end
end
