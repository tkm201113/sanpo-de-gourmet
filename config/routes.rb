Rails.application.routes.draw do
  root 'top#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  resources :users, only: [:new, :create]

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'home', to: 'home#index', as: :home
  get 'mypage', to: 'mypage#index'
  get 'community', to: 'community#index'

  resources :search, only: [:new, :create]

  resources :store_details, only: [:index] do
    collection do
      post 'review'
    end
  end
end