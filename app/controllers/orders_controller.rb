class OrdersController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]
  skip_before_action :confirm_authentication, only: [:create]


    
    def index    
      render json: Order.all, each_serializer: OrderSerializer  
    end
      
    def create
        new_order = Order.new(order_params)
          if new_order.save
            session[:order_id] = new_order.id
            render json: new_order, status: :created
          else render json: new_order.errors.full_messages, status: :unprocessable_entity
          end
        end
          
          def update
          set_order
            if @order
            @order.update(order_params)
              if @order.valid?
                @order.save
                render json: @order
              else 
                  not_found 
              end
            else        
            render json: {error: "Could not find index #{[:id]}"},  status: :unprocessable_entity 
            end      
          end
      
        def destroy
          set_order
          if @order
            @order.destroy
            render json: {message: "deleted"}, status: :ok
          else
            render json: {error: "Could not find index #{[:id]}"}
          end
        end

    def show
      if current_order
         render json: current_order, status: :ok
      else
        not_current_order
        # render json: {error: "No active session"}, status: :unauthorized
      end 
    end

  private
        def order_params
          params.permit(:user_id, :pay_method, :total)        
        end
        
        def not_current_order
          render json: { error: "Not authorized" }, status: :unauthorized
        end
  
        def not_found
          render :json => { :error => "order not found"}, :status => :not_found
            
        end
  
        def set_order
          @order = Order.find(params[:id])
        end
      end
