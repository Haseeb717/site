class AddAttachmentIconToAgeRatings < ActiveRecord::Migration
  def self.up
    change_table :age_ratings do |t|
      t.attachment :icon
    end
  end

  def self.down
    remove_attachment :age_ratings, :icon
  end
end
