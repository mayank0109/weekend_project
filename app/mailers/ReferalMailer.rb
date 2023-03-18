class ReferalMailer < ApplicationMailer

  def send_invite(user, referee_email)
    @user = user
    @signup_url = URI.parse("http://localhost:3000/signup?email=#{referee_email}&referred_by_id=#{user.id}").to_s
    mail(to: referee_email, from: 'no-reply@sample.com', subject: "Invitation to Join App")
  end
end
