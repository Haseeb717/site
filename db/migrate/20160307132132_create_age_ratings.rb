class CreateAgeRatings < ActiveRecord::Migration
  def change
    create_table :age_ratings do |t|
      t.string :name, limit: 300

      t.timestamps null: false
    end
  end
end
