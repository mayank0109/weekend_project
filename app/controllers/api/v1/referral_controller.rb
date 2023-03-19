# frozen_string_literal: true

class Api::V1::ReferralController < Api::V1::BaseController

  def create
    if current_user.referrals.where(email: referal_params[:email]).count > 0
      ReferalMailer.send_invite(current_user, referal_params[:email]).deliver_later
      respond_with_success(I18n.t('mail.successfully_sent'))
    else
      referred_user = Referral.new(email: referal_params[:email], user: current_user)
      if referred_user.save
        respond_with_success(I18n.t('mail.successfully_sent'))
      else
        respond_with_error(referred_user.errors.full_messages.to_sentence)
      end
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
