class Advertising < ActiveRecord::Base
  before_validation :set_position

  validates :title, :subtitle, :position, presence: true
  
  private
  def set_position
    if self.position.nil?
      new_position = Advertising.all.order(position: :desc).pluck(:position).first
      self.position = new_position.nil? ? 1 : (new_position + 1)
    end
  end

  rails_admin do
    weight -9
		navigation_label 'Marketing'
    nestable_list true
    list do
      sort_by :position
      field :title
      field :position do
        sort_reverse false
      end
    end
    edit do
      field :title
      field :subtitle
      field :url
    end
  end
end
