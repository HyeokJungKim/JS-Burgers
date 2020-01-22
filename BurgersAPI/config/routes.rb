Rails.application.routes.draw do
  resources :burger_orders
  resources :burgers
  resources :orders
  resources :users
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
