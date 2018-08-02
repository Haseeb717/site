class BusinessContact < ActiveRecord::Base
  belongs_to :kind_event

  validates :kind_event, :company_name, :responsible_person, :email, :phone, :date, :number_participants, :observations, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create, :message => 'E-mail no formato inválido!'

  rails_admin do
    weight 9
    navigation_label 'Cadastros'
    list do
      field :kind_event
      field :company_name
    end
  end
end
