class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.integer :user_id
      t.integer :order_item
      t.string :category
      t.string :size
      t.integer :price
      t.string :photo
      t.integer :review_stars
      t.text :review

      t.timestamps
    end
  end
end
