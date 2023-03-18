Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    scope "my" do
      put "profile", to: "profiles#update"
      patch "password", to: "passwords#update"
      patch "email", to: "profiles#update_email"
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :referral, only: [:create, :index]
      devise_scope :user do
        post "login", to: "sessions#create", as: "login"
        delete "logout", to: "sessions#destroy", as: "logout"
      end
  
      resources :users, only: [:show, :create, :update, :destroy, :index], constraints: { id: /.*/ }
      end
  end

  # Defines the root path route ("/")
  # root "articles#index"
  root "home#index"
  get "*path", to: "home#index", via: :all
end
