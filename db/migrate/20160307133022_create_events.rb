class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :subtitle
      t.string :duration, limit: 100
      t.text :price_ticket
      t.text :advice
      t.string :slug
      t.text :description
      t.text :summary_session
      t.boolean :published
      t.references :age_rating, index: true, foreign_key: true
      t.references :genre, index: true, foreign_key: true

      t.timestamps null: false
    end
    add_index :events, :title, unique: true
    add_index :events, :slug, unique: true
  end
end
