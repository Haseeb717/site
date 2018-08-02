class CreateSponsors < ActiveRecord::Migration
  def change
    create_table :sponsors do |t|
      t.string :name
      t.text :description
      t.integer :position
      t.string :url

      t.timestamps null: false
    end
    add_index :sponsors, :name, unique: true
  end
end
