class Session < ActiveRecord::Base
  belongs_to :schedule

  validates :schedule, :time, presence: true

  rails_admin do
    parent Event
    navigation_icon 'icon-time'
    list do
      field :schedule
      field :time
    end
    edit do
      field :schedule
      field :time
    end
  end
end
