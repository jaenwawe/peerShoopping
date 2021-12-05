class ProductSerializer < ActiveModel::Serializer
  attributes :id, :available, :category, :size, :price, :photo, :user_id


  def user_product
      current_user.products.find_by(id: object.id)
  end

  def user_can_modify
    current_user.admin || object.user == current_user
  end


end
