class AddDatesToFeatureds < ActiveRecord::Migration
  def change
    add_column :featureds, :start_date, :datetime
    add_column :featureds, :end_date, :datetime
  end
end
