class AddAttachmentImageToFeatureds < ActiveRecord::Migration
  def self.up
    change_table :featureds do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :featureds, :image
  end
end
