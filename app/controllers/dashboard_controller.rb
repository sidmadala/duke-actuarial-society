class DashboardController < ApplicationController
    
    def index
    end

    def submit
        UserMailer.with(email:params[:email]).request_submitted.deliver_now
        body = "Name: "+params[:first_name]+" "+params[:last_name]+"-"
        body = body+"Email: "+params[:email]+"-"
        body = body+"Message: "+params[:message]
        UserMailer.with(email:"zs93@duke.edu", body:body).request_submitted2.deliver_now
        redirect_to root_url
    end

end    