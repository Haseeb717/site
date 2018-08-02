class AddFieldShowSubtitleBannerHomeToFeatureds < ActiveRecord::Migration
  def change
    add_column :featureds, :show_subtitle_banner_home, :boolean
  end
end
