class CreateFrequentlyAskeds < ActiveRecord::Migration
  def change
    create_table :frequently_askeds do |t|
      t.string :question, limit: 1000
      t.text :answer
      t.references :category, index: true, foreign_key: true
      t.integer :position

      t.timestamps null: false
    end
  end
end
