class KindEvent < ActiveRecord::Base
  has_many :business_contacts, dependent: :destroy

  validates :name, presence: true

  rails_admin do
    parent BusinessContact
    list do
      field :name
    end
  end
end
