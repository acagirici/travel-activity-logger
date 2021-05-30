class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :title
      t.string :city
      t.string :state
      t.string :description
      t.integer :rating
      t.integer :min_age
      t.string :image_url
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
