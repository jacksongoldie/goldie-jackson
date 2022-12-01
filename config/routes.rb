Rails.application.routes.draw do
  resources :projects, only: [:index, :create, :update]
  resources :contacts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'
end
