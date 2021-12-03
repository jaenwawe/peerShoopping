class ProductsController < ApplicationController
        #skip_before_action :confirm_authentication, only: [:index, :create, :update, :destroy]
        # before_action :set_product, only: [:show, :update, :destroy]
        
        def index    
          render json: Product.all, each_serializer: ProductSerializer  
        end
    
    
        def show
          if current_product
             render json: current_product, status: :ok
          else
            not_current_product
          end 
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
          set_product
            if @product
            @product.update(product_params)
              if @product.valid?
                @product.save
                render json: @product
              else 
                  not_found 
              end
            else        
            render json: {error: "Could not find index #{[:id]}"},  status: :unprocessable_entity 
            end      
          end
      
        def destroy
          set_product
          if @product
            @product.destroy
            render json: {message: "deleted"}, status: :ok
          else
            render json: {error: "Could not find index #{[:id]}"}
          end
        end
          
            
      
      private
            def product_params
              params.permit(:user_id, :category, :size, :price, :photo, :review_stars, :review)        
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
          
          end
          
      
    