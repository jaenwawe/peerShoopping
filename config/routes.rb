Rails.application.routes.draw do
  
  resources :products, except: [:index]
  resources :users, except: [:create, :show]
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  get "/styles", to: "products#index"

  post "/orders", to: "orders#create"


  post "/register", to: "users#create"
  post "/login", to: "sessions#create"
  post "/me", to: "users#show" 

  post "/sale", to: "products#create" 

  delete "/logout", to: "sessions#destroy"
   
  post "/sold", to: "order_items#create"
  patch "/orders/:id", to: "orders#update"



end
