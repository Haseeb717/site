class Subject < ActiveRecord::Base
  has_many :contacts, dependent: :destroy
  validates :name, :email_redirection, presence: true

  rails_admin do
    parent Contact
    list do
      field :name
    end
    edit do
      field :name
      field :email_redirection
    end
  end
end
