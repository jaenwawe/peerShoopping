class Orders < ActiveRecord::Migration[6.1]
    def change
      create_table :orders do |t|
        
        t.string :pay_method, default: "Visa"
        t.integer :total
        t.integer :customer_id
        t.integer :products_id
  
        t.timestamps
      end
    end
  end