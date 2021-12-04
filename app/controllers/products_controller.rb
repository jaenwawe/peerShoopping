class ProductsController < ApplicationController
        before_action :set_product, only: [ :show, :update, :destroy]
        before_action :authorize_user, only: [ :update, :destroy]
        skip_before_action :confirm_authentication, only: [:index]
        
        def index 
          render json: Product.all, each_serializer: ProductSerializer 
        end

        def show
             render json: @product
        end
    
  
        def create
        new_product = Product.new(product_params)
          if new_product.save
            session[:Product_id] = new_product.id
            render json: new_product, status: :created
          else render json: new_product.errors.full_messages, status: :unprocessable_entity
          end
        end
          
          def update
            if @product.update(product_params)
                render json: @product, status: :ok 
          end
      
        def destroy
            @product.destroy
        end
      
      private
      
            def product_params
              params.permit(:available, :user_id, :category, :size, :price, :photo, :review_stars, :review)        
            end
            
            def not_current_product
              render json: { error: "Not authorized" }, status: :unauthorized
            end
      
            def not_found
              render :json => { :error => "Product not found"}, :status => :not_found
                
            end
      
            def set_product
              @product = Product.find(params[:id])
            end

      
            def authorize_user
              user_can_modify = current_user.admin? || object.user == current_user
              if !user_can_modify
                render json: { error: "You don't have permission to perform that action" }, status: :forbidden
              end
            end
          end end
        