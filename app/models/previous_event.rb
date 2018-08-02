class PreviousEvent < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders, :history]

  self.per_page = 6

  belongs_to :genre

  has_many :previous_events_image, dependent: :destroy
  accepts_nested_attributes_for :previous_events_image, :allow_destroy => true

  validates :title, :short_description, :description, :date_start, :genre , presence: true

  has_attached_file :image, :styles => { :thumb => "309x307#", :mini => "270x270#", :micro => "97x97#" }, :default_url => ':placeholder'
  validates_attachment :image, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

  rails_admin do
  	navigation_label 'Eventos Anteriores'
	edit do
		field :title
		field :short_description
		field :description
    field :genre
		field :informations, :ck_editor
		field :image
    	field :date_start do
    		strftime_format "%d/%m/%Y"
  		end
    	field :date_end do
    		strftime_format "%d/%m/%Y"
  		end
		field :previous_events_image
    field :published
	end
  end


end
