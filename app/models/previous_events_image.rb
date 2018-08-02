class PreviousEventsImage < ActiveRecord::Base
  belongs_to :previous_event, inverse_of: :previous_events_image

  has_attached_file :image, :styles => {  :medium => "687x455#", :micro => "82x60#" }, :default_url => ':placeholder'
  validates_attachment :image, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

    rails_admin do
    	parent PreviousEvent
    	navigation_label 'Imagens'
    end


end
