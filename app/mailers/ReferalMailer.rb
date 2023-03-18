class ReferalMailer < ApplicationMailer

  def send_invite(user, referee_email)
    @user = user
    mail(to: referee_email, from: 'no-reply@sample.com', subject: "Invitation to Join App")
  end
end