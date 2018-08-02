class AddFieldAskForYourCardToSalesChannels < ActiveRecord::Migration
  def change
    add_column :sales_channels, :ask_for_your_card, :boolean
  end
end
