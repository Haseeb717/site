Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admins, controllers: {
    sessions: 'admin/sessions'
  }

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # 404
  get "/404" => "errors#not_found"

  #500
  get "/500" => "errors#internal_server_error"

  # Home
  root 'home#index'

  # Sobre o teatro
  get 'teatro', to: 'home#about', as: :about

  # Acessibilidade
  get 'acessibilidade', to: 'acessibility#index', as: :acessibility

  # Newsletter
  post "/newsletter" => "newsletters#create", as: :newsletters

  # Busca
  get "busca/(:term)" => "search#index", as: :search

  # Eventos
  get 'programacao', to: 'events#index', as: :events
  get 'programacao/:slug', to: 'events#show', as: :events_show

  # Eventos Anteriores
  get 'aconteceu', to: 'previous_events#index', as: :previous_events
  get 'aconteceu/:slug', to: 'previous_events#show', as: :previous_events_show

  # Contato
  get 'contato', to: 'contacts#index', as: :contact
  post 'contato', to: 'contacts#create', as: :contact_create

  # Bilheteria
  get 'bilheteria', to: 'home#box_office', as: :box_office
  get 'mapa-de-plateia', to: 'home#map', as: :map

  # Empresarial
  get 'comercial', to: 'business#index', as: :business
  post 'comercial-negocios', to: 'business#create_bussines_contact', as: :business_create
  post 'comercial-parcerias', to: 'business#create_partnership_contact', as: :partnership_create

  # Perguntas frequentes
  get 'perguntas-frequentes', to: 'home#frequently_askeds', as: :frequently_askeds

  # Imprensa
  get 'imprensa', to: 'home#press', as: :press
end
