class Featured < ActiveRecord::Base
  before_validation :set_position

  # validates :title, :subtitle, :start_date, :end_date, presence: true
  validates :start_date, :end_date, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https)), :message => 'Url inválida', :allow_blank => true

  has_attached_file :image, :styles => { :standard => "1920x1000#", :large => "925x1126#", :thumb => "309x307#", :mini => "126x113#", :micro => "97x97#", :small => "127x113#" }, :default_url => ':placeholder'
  validates_attachment :image, :content_type => { :content_type => /\Aimage\/.*\Z/ }, :size => { :in => 0..2.megabytes }, :presence => true

  scope :active, -> { where("start_date <= ? AND end_date >= ?", Time.current, Time.current) }

  private
  def set_position
    if self.position.nil?
      new_position = Featured.all.order(position: :desc).pluck(:position).first
      self.position = new_position.nil? ? 1 : (new_position + 1)
    end
  end

  rails_admin do
    weight (-9)
		navigation_label 'Marketing'
    nestable_list true
    list do
      sort_by :position
      field :title
      field :start_date
      field :end_date
      field :position do
        sort_reverse false
      end
    end
    edit do
      field :title
      field :start_date do
        strftime_format "%d/%m/%Y %H:%M"
      end
      field :end_date do
        strftime_format "%d/%m/%Y %H:%M"
      end
      field :subtitle
      field :description_date
      field :url
      field :target_blank
      field :show_title_banner_home
      field :show_subtitle_banner_home
      field :image
    end
  end
end
