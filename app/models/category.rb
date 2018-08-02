class Category < ActiveRecord::Base
  has_many :frequently_askeds, dependent: :destroy

  validates :name, presence: true

  def to_slug
    self.name.parameterize
  end

  rails_admin do
    parent FrequentlyAsked
    list do
      field :name
    end
    edit do
      field :name
      field :frequently_askeds
    end
  end
end
