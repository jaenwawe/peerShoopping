class User < ApplicationRecord
    has_many :products
    has_many :order_items, through: :products
    has_many :orders

    has_secure_password
    
    validates :username, uniqueness: { case_sensitive: false }
    validates :email, :password, presence: true

end

