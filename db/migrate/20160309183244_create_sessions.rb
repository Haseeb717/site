class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.references :schedule, index: true, foreign_key: true, on_delete: :cascade
      t.time :time

      t.timestamps null: false
    end
  end
end
