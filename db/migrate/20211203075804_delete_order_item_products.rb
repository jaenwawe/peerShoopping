class DeleteOrderItemProducts < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :order_items
  end
end
