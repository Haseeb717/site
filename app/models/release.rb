class Release < ActiveRecord::Base
  self.per_page = 6

  validates :title, :description, :date, :end_date, presence: true
  has_attached_file :file
  validates_attachment :file, :presence => true,
                       :content_type => { :content_type => ['application/pdf', 'application/msword', 'text/plain'] },
                       :message => 'Formato do arquivo inválido',
                       :size => { :in => 0..4.megabytes }

  default_scope { where("published = ? and end_date >= ?", true,  Time.current) }

  rails_admin do
    weight (-9)
    navigation_label 'Marketing'

    list do
      field :title
      field :date
      field :end_date
      field :published
    end
    edit do
      field :title
      field :subtitle
      field :description
      field :date do
        strftime_format "%d/%m/%Y %H:%M"
      end
      field :end_date do
        strftime_format "%d/%m/%Y %H:%M"
      end
      field :file
      field :published
    end
  end
end
