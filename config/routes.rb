Rails.application.routes.draw do

  devise_for :users

  root 'home#index'

  resources :users

  resources :games

  resources :comments

  resources :map, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :new, :create, :show, :destroy]
      resources :users
      resources :comments, only: [:index, :new, :create]
    end
  end

  resources :conversations do
    resources :messages
  end

  get 'current_user' => "users#current_user"

end
