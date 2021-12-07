Rails.application.routes.draw do
  
  post "/sale", to: "products#create"
  post "/sold", to: "order_items#create"
  get "/everything_sold", to: "order_items#index"


  get "/styles", to: "products#index"


  post "/login", to: "sessions#create"
  delete "/logout/:id", to: "sessions#destroy"

  
  post "/register", to: "users#create"
  patch "/orders/:id", to: "orders#update"
  get "/orders", to: "orders#index"
  post "/shopping", to: "orders#create"
  delete "/orders", to: "orders#destroy"


  post "/products/add", to: "products#create" 

  resources :products, except: [:create,:index]
  resources :users, except: [:create, :show]
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end