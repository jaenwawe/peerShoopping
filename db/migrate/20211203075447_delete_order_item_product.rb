class DeleteOrderItemProduct < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :order_item
  end
end
