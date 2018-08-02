class AddAttachmentImageToEntrepreneurs < ActiveRecord::Migration
  def self.up
    change_table :entrepreneurs do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :entrepreneurs, :image
  end
end
