class CreateFeatureds < ActiveRecord::Migration
  def change
    create_table :featureds do |t|
      t.string :title
      t.string :subtitle
      t.string :description_date
      t.string :url
      t.boolean :target_blank
      t.integer :position

      t.timestamps null: false
    end
  end
end
