class UsersController < ApplicationController
    #skip_before_action :confirm_authentication, only: [:create]
    #before_action :set_user, only: [:show, :update, :destroy]
    
    def show
      if current_user
         render json: current_user, status: :ok
      else
        not_current_user
        # render json: {error: "No active session"}, status: :unauthorized
      end 
    end

    
    def create
    new_user = User.new(user_params)
      if new_user.save
        session[:user_id] = new_user.id
        render json: new_user, status: :created
      else render json: new_user.errors.full_messages, status: :unprocessable_entity
      end
    end
      
  
  private
        def user_params
          params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :email,  :phone_number, :address, :city, :state, :zipcode)        
        end
        
        def not_current_user
          render json: { error: "Not authorized" }, status: :unauthorized
        end
  
        def not_found
          render :json => { :error => "user not found"}, :status => :not_found
            
        end
  
        def set_user
          @user = User.find(params[:id])
        end
      end