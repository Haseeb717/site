class AddAttachmentMapToEvents < ActiveRecord::Migration
  def self.up
    change_table :events do |t|
      t.attachment :map
    end
  end

  def self.down
    remove_attachment :events, :map
  end
end
