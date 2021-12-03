class Product < ApplicationRecord
    belongs_to :user
    has_many :order_items
    has_many :orders, through: :order_items

    validates :user_id, presence: true
    validates :category, presence: true
    validates :price, presence: true
    

  end
  