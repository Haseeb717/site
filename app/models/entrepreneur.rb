class Entrepreneur < ActiveRecord::Base
  before_validation :set_position

  validates :name, :description, :url, :position, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https)), :message => 'Url inválida'

  has_attached_file :image, :styles => { :thumb => "340x235#" }, :default_url => ':placeholder'
  validates_attachment :image, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

  has_attached_file :icon, :styles => { :thumb => "125x22#" }, :default_url => ':placeholder'
  validates_attachment :icon, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

  private
  def set_position
    if self.position.nil?
      new_position = Entrepreneur.all.order(position: :desc).pluck(:position).first
      self.position = new_position.nil? ? 1 : (new_position + 1)
    end
  end

  rails_admin do
    weight -9
		navigation_label 'Marketing'
    nestable_list true
    list do
      sort_by :position
      field :name
      field :position do
        sort_reverse false
      end
    end
    edit do
      field :name
      field :description, :ck_editor
      field :url
      field :image
      field :icon
    end
  end
end
