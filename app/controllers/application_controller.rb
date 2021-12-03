class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :confirm_authentication
  
    private
  
    def current_user
      @current_user ||= User.find_by_id(session[:user_id])
      
    end
  
    def confirm_authentication
      render json: { error: "You must be logged in to do that." }, status: :unauthorized unless current_user
    end
  end