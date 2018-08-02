class CreateNewsletters < ActiveRecord::Migration
  def change
    create_table :newsletters do |t|
      t.string :email, limit: 100

      t.timestamps null: false
    end
    add_index :newsletters, :email, unique: true
  end
end
