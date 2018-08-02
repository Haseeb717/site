class AddFieldsToReleases < ActiveRecord::Migration
  def change
    add_column :releases, :subtitle, :string
    add_column :releases, :end_date, :datetime
  end
end
