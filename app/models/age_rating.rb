class AgeRating < ActiveRecord::Base
  has_many :events, dependent: :destroy

  validates :name, presence: true

  has_attached_file :icon, :styles => { :mini => "30x30#" }, :default_url => ':placeholder'
  validates_attachment :icon, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

  rails_admin do
    parent Event
    navigation_icon 'icon-thumbs-up'
    list do
      field :name
      field :icon
    end
    edit do
      field :name
      field :icon
    end
  end
end
