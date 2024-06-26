Rails.application.routes.draw do
  get 'search/new'
  get 'search/create'
  devise_for :users
  get "up" => "rails/health#show", as: :rails_health_check

  root 'top#index'

  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'home', to: 'home#index'

  get 'search', to: 'search#new'
  post 'search', to: 'search#create'

  get 'store_details/index'
  post 'store_details/review'
end
