class SalesChannel < ActiveRecord::Base
  belongs_to :event

  validates :event, :name, :url, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https)), :message => 'Url inválida'

  rails_admin do
    parent Event
    navigation_icon 'icon-shopping-cart'

    list do
      field :event
      field :name
      field :url
    end
    edit do
      field :event
      field :name
      field :url
      field :ask_for_your_card
    end
  end
end
