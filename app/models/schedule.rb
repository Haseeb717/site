class Schedule < ActiveRecord::Base
  belongs_to :event
  has_many :sessions, -> { order 'sessions.time' }, dependent: :destroy

  validates :date, :event, presence: true

  def display_name
    return self.event.present? && self.date.present? ? "#{self.event.title} - #{self.date.strftime('%d/%m/%y')}" : "#{self.id}"
  end

  rails_admin do
    parent Event
    navigation_icon 'icon-calendar'
		list do
			items_per_page 100
			field :event
			field :date
		end
		edit do
	    field :event
	    field :date do
        strftime_format "%d/%m/%Y"
      end
		end
  end
end
