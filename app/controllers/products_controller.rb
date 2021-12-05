class ProductsController < ApplicationController 

  def index    
  render json: Product.all, each_serializer: ProductSerializer  
end

def available 
  render json:  Product.where("available": true), each_serializer: ProductSerializer
end

  
def create
    new_product = Product.new(product_params)
      if new_product.save
        session[:product_id] = new_product.id
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

def show
  if current_product
     render json: current_product, status: :ok
  else
    not_current_product
    # render json: {error: "No active session"}, status: :unauthorized
  end 
end

private
    def product_params
      params.permit(:available, :user_id, :category, :size, :price, :photo)        
    end
    
    def not_current_product
      render json: { error: "Not authorized" }, status: :unauthorized
    end

    def not_found
      render :json => { :error => "product not found"}, :status => :not_found
        
    end

    def set_product
      @product = Product.find(params[:id])
    end
  end

        