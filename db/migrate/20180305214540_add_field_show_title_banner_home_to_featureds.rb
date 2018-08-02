class AddFieldShowTitleBannerHomeToFeatureds < ActiveRecord::Migration
  def change
    add_column :featureds, :show_title_banner_home, :boolean
  end
end
