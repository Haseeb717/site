class Event < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders, :history]

  self.per_page = 6

  has_many :schedules, dependent: :destroy
  has_many :sales_channels, dependent: :destroy
  belongs_to :age_rating
  belongs_to :genre

  # validates :title, uniqueness: {case_sensitive: false}, presence: true
  # validates :description, :subtitle, :price_ticket, :duration, :age_rating, :genre, presence: true
  validates :description, :price_ticket, :duration, :age_rating, :genre, presence: true

  has_attached_file :image, :styles => { :large => "925x1126#", :thumb => "309x307#", :mini => "270x270#", :micro => "97x97#", :small => "127x113#" }, :default_url => ':placeholder'
  validates_attachment :image, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

  has_attached_file :map, :styles => { :thumb => "503x378#" }, :default_url => ':placeholder'
  validates_attachment :map, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

  default_scope { where("published = ?", true) }
  scope :get_upcoming_events_avaliables, -> {  select('events.*, MAX(schedules.date) as most_date, MIN(schedules.date) as earliest_date')
                                              .joins(:schedules)
                                              .where('DATE(schedules.date) >= ?', Time.zone.today)
                                              .order('earliest_date')
                                              .group('events.id')
                                            }
  scope :featured_event, -> { get_upcoming_events_avaliables.first(2) }


  # Busca
  searchable do
    text :title, :default_boost => 10, :stored => true
    text :subtitle, :default_boost => 8
    text :description, :default_boost => 5
    text :price_ticket, :default_boost => 2
    text :duration, :default_boost => 2
    text :advice, :default_boost => 2

    text :genre do
	  name
	end
    text :age_rating do
      name
    end
    text :sales_channels do
      sales_channels.map(&:name)
    end
    date :schedules, :multiple => true do
      schedules.map(&:date)
    end
    boolean :published
  end

  rails_admin do
    weight (-10)
	  navigation_label 'Programação'
	list do
	  items_per_page 100
	  field :title
	  field :published
	end
	edit do
	  field :title
      field :subtitle
      field :date_featured
	  field :image
      field :map
      field :description, :ck_editor
      field :summary_session, :ck_editor
      field :price_ticket, :ck_editor
      field :advice, :ck_editor
      field :duration
      field :age_rating
      field :genre
	  field :published
	end
  end
end
