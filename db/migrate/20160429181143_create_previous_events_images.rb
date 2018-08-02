class CreatePreviousEventsImages < ActiveRecord::Migration
  def change
    create_table :previous_events_images do |t|
      t.string :title
      t.attachment :image
      t.references :previous_event, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
