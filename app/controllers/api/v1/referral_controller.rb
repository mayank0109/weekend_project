# frozen_string_literal: true

class Api::V1::ReferralController < Api::V1::BaseController

  def create
    ReferalMailer.send_invite(current_user, referal_params[:email]).deliver_later
  end

  private

    def referal_params
      params.require(:referral).permit(:email)
    end
end
