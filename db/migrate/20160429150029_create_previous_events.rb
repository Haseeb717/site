class CreatePreviousEvents < ActiveRecord::Migration
  def change
    create_table :previous_events do |t|
      t.string :title
      t.text :short_description
      t.string :slug
      t.text :description
      t.text :informations
      t.boolean :published
      t.attachment :image
      t.date :date_start
      t.date :date_end
      t.references :genre, index: true, foreign_key: true

      t.timestamps null: false
    end
    add_index :previous_events, :slug, unique: true
  end
end
