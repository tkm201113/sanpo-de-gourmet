Rails.application.routes.draw do
  get 'search/new'
  get 'search/create'
  devise_for :users
  get "up" => "rails/health#show", as: :rails_health_check

  root 'top#index'

  resources :users, only: [:new, :create]

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'home', to: 'home#index'

  get 'mypage', to: 'mypage#index'

  get 'search', to: 'search#new'
  post 'search', to: 'search#create'

  get 'community', to: 'community#index'

  get 'store_details/index'
  post 'store_details/review'
end
