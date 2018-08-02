class CreateReleases < ActiveRecord::Migration
  def change
    create_table :releases do |t|
      t.string :title
      t.string :description, limit: 500
      t.boolean :published
      t.datetime :date

      t.timestamps null: false
    end
  end
end
