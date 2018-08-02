class CreatePartnershipContacts < ActiveRecord::Migration
  def change
    create_table :partnership_contacts do |t|
      t.string :company_name
      t.string :responsible_person
      t.string :email
      t.string :phone
      t.text :observations
      
      t.timestamps null: false
    end
  end
end
