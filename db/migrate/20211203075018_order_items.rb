class OrderItems < ActiveRecord::Migration[6.1]
  create_table :order_items do |t|
    t.belongs_to :order, null: false, foreign_key: true
    t.belongs_to :product, null: false, foreign_key: true
    t.integer :customer_id
    t.timestamps
  end
end
