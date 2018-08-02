class RemoveIndexTitleModelEnvents < ActiveRecord::Migration
  def change
    remove_index :events, column: :title
  end
end
