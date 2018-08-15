Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:edit, :update, :index] 
  resources :groups, shallow: true, only: [:index, :new, :edit, :update, :create] do
    resources :messages, only: [:index, :create]  do
      resources :likes, only: [:create, :destroy]
    end
  end
end
