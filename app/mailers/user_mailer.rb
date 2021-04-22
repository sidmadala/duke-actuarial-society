class UserMailer < ApplicationMailer
    default from: 'noreply@duke.edu'
    def request_submitted 
        mail(to: "zs93@duke.edu", subject: 'Submitted General Inquiries')
    end

    def request_submitted2
        @body = params[:body]
        mail(to: "zs93@duke.edu", subject: 'New Inquiries') 
    end

end    