class CreateEntrepreneurs < ActiveRecord::Migration
  def change
    create_table :entrepreneurs do |t|
      t.string :name
      t.text :description
      t.string :url
      t.integer :position

      t.timestamps null: false
    end
  end
end
