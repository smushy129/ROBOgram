Rails.application.routes.draw do
    root "static_pages#root"

    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create, :update, :show]
      resources :photos, only: [:index, :create, :show, :destroy];
    end

end
