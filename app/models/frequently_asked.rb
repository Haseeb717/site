class FrequentlyAsked < ActiveRecord::Base
  before_validation :set_position

  belongs_to :category

  validates :answer, :question, :category, :position, presence: true

  def display_name
    self.question.present? ? "#{self.question.truncate(30, :separator => ' ')}" : "#{self.id}"
  end

  private
  def set_position
    if self.position.nil?
      new_position = FrequentlyAsked.all.order(position: :desc).pluck(:position).first
      self.position = new_position.nil? ? 1 : (new_position + 1)
    end
  end

  rails_admin do
    weight (-9)
		navigation_label 'Marketing'
    nestable_list true
    list do
      sort_by :position
      field :question
      field :category
      field :position do
        sort_reverse false
      end
    end
    edit do
      field :question
      field :answer, :ck_editor
      field :category
    end
  end
end
