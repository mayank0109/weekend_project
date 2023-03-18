class Referral < ApplicationRecord
  validates :email, format: { with: Devise.email_regexp }, uniqueness: { scope: :user, message: "has already been referred by you" }

  belongs_to :user, :foreign_key => 'referred_by_id'

  after_create :send_invite

  private

  def send_invite
    ReferalMailer.send_invite(user, email).deliver_later
  end
end
