class AddDateFeaturedToEvents < ActiveRecord::Migration
  def change
    add_column :events, :date_featured, :string
  end
end
