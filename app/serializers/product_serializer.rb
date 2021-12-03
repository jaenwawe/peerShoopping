class ProductSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :category, :size, :price, :review_stars, :photo, :review
end
