class AddAttachmentFileToReleases < ActiveRecord::Migration
  def self.up
    change_table :releases do |t|
      t.attachment :file
    end
  end

  def self.down
    remove_attachment :releases, :file
  end
end
