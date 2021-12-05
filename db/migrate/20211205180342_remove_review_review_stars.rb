class RemoveReviewReviewStars < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :review:string
    remove_column :products, :review_stars:integer
  end
end
