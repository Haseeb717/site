class AddAttachmentIconToSponsors < ActiveRecord::Migration
  def self.up
    change_table :sponsors do |t|
      t.attachment :icon
    end
  end

  def self.down
    remove_attachment :sponsors, :icon
  end
end
