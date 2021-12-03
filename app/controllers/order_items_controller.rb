class OrderItemsController < ApplicationController
    #skip_before_action :confirm_authentication, only: [:create]
    # before_action :set_order, only: [:show, :update, :destroy]
    
    def index    
      render json: OrderItem.all, each_serializer: OrderItemSerializer  
    end
      
    def create
        new_order_item = OrderItem.new(order_item_params)
          if new_order_item.save
            # session[:order_id] = new_order_item.id
            render json: new_order_item
          else render json: new_order_item.errors.full_messages, status: :unprocessable_entity
          end
        end
          
          def update
          set_order_item
            if @order_item
            @order_item.update(order_item_params)
              if @order_item.valid?
                @order_item.save
                render json: @order_item
              else 
                  not_found 
              end
            else        
            render json: {error: "Could not find index #{[:id]}"},  status: :unprocessable_entity 
            end      
          end
      
        def destroy
          set_order
          if @order_item
            @order_item.destroy
            render json: {message: "deleted"}, status: :ok
          else
            render json: {error: "Could not find index #{[:id]}"}
          end
        end

    def show
      if current_order_item
         render json: current_order_item, status: :ok
      else
        not_current_order_item
        # render json: {error: "No active session"}, status: :unauthorized
      end 
    end

  
  private
        def order_item_params
          params.permit(:order_id, :product_id, :customer_id)        
        end
        
        def not_current_order_item
          render json: { error: "Not authorized" }, status: :unauthorized
        end
  
        def not_found
          render :json => { :error => "order not found"}, :status => :not_found
            
        end
  
        def set_order
          @order_item = OrderItem.find(params[:id])
        end
      end
