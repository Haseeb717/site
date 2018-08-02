class Contact < ActiveRecord::Base
  belongs_to :subject

  validates :name, :email, :message, :subject, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create, :message => 'E-mail no formato inválido!'

  rails_admin do
    weight 9
		navigation_label 'Cadastros'
    list do
      field :name
      field :email
    end
  end
end
