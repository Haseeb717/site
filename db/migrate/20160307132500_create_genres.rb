class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.string :name, limit: 30

      t.timestamps null: false
    end
    add_index :genres, :name, unique: true
  end
end
