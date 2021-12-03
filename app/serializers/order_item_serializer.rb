class OrderItemSerializer < ActiveModel::Serializer
   attributes :id, :order_id, :product_id, :customer_id
  has_one :order
  has_one :product
end
