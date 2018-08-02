class CreateAdvertisings < ActiveRecord::Migration
  def change
    create_table :advertisings do |t|
      t.string :title
      t.string :subtitle, limit: 400      
      t.string :url
      t.integer :position

      t.timestamps null: false
    end
  end
end
