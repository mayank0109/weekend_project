# frozen_string_literal: true

class Api::V1::ReferralController < Api::V1::BaseController

  def create
    referred_user = ReferredUser.new(email: referal_params[:email], user: current_user)
    if referred_user.save
      respond_with_success("Referal email has been sent successfully")
    else
      respond_with_error(referred_user.errors.full_messages.to_sentence)
    end
  end

  private

    def referal_params
      params.require(:referral).permit(:email)
    end
end
