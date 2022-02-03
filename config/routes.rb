Rails.application.routes.draw do
  scope :api do
    resources :favorites
    resources :songs, only: [:show, :index]
    resources :users, only: [:show, :index, :create]

    get "/me", to: "users#show"

    post "/login", to: "sessions#create"
    post "/logout", to: "sessions#destroy"
    post "/signup", to: "users#create"

  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
