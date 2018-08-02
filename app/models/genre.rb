class Genre < ActiveRecord::Base
  has_many :events

  validates :name, uniqueness: {case_sensitive: false}, presence: true

  rails_admin do
    parent Event
    navigation_icon 'icon-eye-open'
    list do
      field :name
    end
    edit do
      field :name
    end
  end
end
