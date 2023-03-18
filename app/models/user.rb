class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, uniqueness: true, format: { with: Devise.email_regexp }

  validates :password_confirmation, presence: true, on: :create
  validates :first_name, :last_name, :email, presence: true

  before_save :ensure_authentication_token_is_present

  has_many :referred_users, :foreign_key => 'referred_by_id'

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
end
