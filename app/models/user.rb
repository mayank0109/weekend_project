class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, uniqueness: true, format: { with: Devise.email_regexp }

  validates :password_confirmation, presence: true, on: :create
  validates :first_name, :last_name, :email, presence: true

  has_many :referrals, foreign_key: 'referred_by_id'
  belongs_to :referrer, class_name: 'User', foreign_key: 'referred_by_id', optional: true
  has_many :referred_users, class_name: 'User', foreign_key: 'referred_by_id'

  before_save :ensure_authentication_token_is_present
  before_save :ensure_referrer_is_present, if: :referred_by_id
  after_create :delete_referral_if_present

  def name
    [first_name, last_name].join(" ").strip
  end

  private

  def ensure_authentication_token_is_present
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end

  def delete_referral_if_present
    if referral = Referral.find_by(email: email)
      Referral.find_by(email: email).destroy!
    end
  end

  def ensure_referrer_is_present
    if !referrer.present?
      errors.add(:base, "Invalid referrer")
      throw(:abort)
    end
  end
end
