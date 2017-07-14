Rails.application.routes.draw do
    root "static_pages#root"

    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create, :index, :update, :show]
      resources :photos, only: [:index, :create, :show, :destroy]
      resources :follows, only: [:index, :create, :destroy]
      resources :likes, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy]
    end

end
