class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.string :name
      t.integer :rating
      t.text :review
      t.integer :service
      t.integer :price
      t.integer :atmosphere
      t.string :store_name

      t.timestamps
    end
  end
end
