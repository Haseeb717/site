class AddAttachmentIconToEntrepreneurs < ActiveRecord::Migration
  def self.up
    change_table :entrepreneurs do |t|
      t.attachment :icon
    end
  end

  def self.down
    remove_attachment :entrepreneurs, :icon
  end
end
