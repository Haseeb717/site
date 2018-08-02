class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.date :date
      t.references :event, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
