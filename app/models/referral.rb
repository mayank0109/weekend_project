class Referral < ApplicationRecord
  validates :email, format: { with: Devise.email_regexp }, uniqueness: { scope: :user, message: "has already been referred by you" }

  belongs_to :user, foreign_key: 'referred_by_id'

  before_create :abort_if_user_present
  after_create :send_invite

  private

  def send_invite
    ReferalMailer.send_invite(user, email).deliver_later
  end

  def abort_if_user_present
    if User.where(email: email).present?
      errors.add(:base, "User with same email is already created")
      throw(:abort)
    end
  end
end
