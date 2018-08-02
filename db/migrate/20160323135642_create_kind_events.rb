class CreateKindEvents < ActiveRecord::Migration
  def change
    create_table :kind_events do |t|
      t.string :name

      t.timestamps null: false
    end
    add_index :kind_events, :name, unique: true
  end
end
