class CreateSalesChannels < ActiveRecord::Migration
  def change
    create_table :sales_channels do |t|
      t.references :event, index: true, foreign_key: true, on_delete: :cascade
      t.string :name
      t.string :url

      t.timestamps null: false
    end
  end
end
