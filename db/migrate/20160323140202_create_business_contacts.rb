class CreateBusinessContacts < ActiveRecord::Migration
  def change
    create_table :business_contacts do |t|
      t.references :kind_event, index: true, foreign_key: true
      t.string :company_name
      t.string :responsible_person
      t.string :email
      t.string :phone
      t.date :date
      t.string :number_participants
      t.text :observations

      t.timestamps null: false
    end
  end
end
