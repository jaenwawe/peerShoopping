class ProductSerializer < ActiveModel::Serializer
  attributes :id, :available, :category, :size, :price, :review_stars, :photo, :review, :user_id, :user_can_modify


  def user_product
      current_user.products.find_by(id: object.id)
  end

  def user_can_modify
    current_user.admin? || object.user == current_user
  end


end
