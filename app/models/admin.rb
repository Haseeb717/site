class Admin < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :rememberable, :trackable, :validatable

  rails_admin do
    navigation_icon 'icon-user'
    navigation_label 'Segurança'
    weight 10
    list do
      field :email
    end
    edit do
      field :email
      field :password
      field :password_confirmation
    end
  end
end
