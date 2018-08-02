class PartnershipContact < ActiveRecord::Base
  validates :company_name, :responsible_person, :email, :phone, :observations, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create, :message => 'E-mail no formato inválido!'

  rails_admin do
    weight 9
    navigation_label 'Cadastros'
    list do
      field :company_name
    end
  end
end
