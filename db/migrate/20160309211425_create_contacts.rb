class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :message, limit: 1000
      t.references :subject, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
