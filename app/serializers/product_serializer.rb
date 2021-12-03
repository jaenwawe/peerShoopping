class ProductSerializer < ActiveModel::Serializer
  attributes :id, :available, :category, :size, :price, :review_stars, :photo, :review, :user_id
end
