class ChangeTotalDefault < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :total, :integer, default: 0
  end
end
