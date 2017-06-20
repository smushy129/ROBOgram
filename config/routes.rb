Rails.application.routes.draw do
    root "static_pages#root"

    namespace :api, defaults: {format: :json} do
      resource :users, only: [:create, :update]
      resource :session, only: [:create, :destroy]
    end
end
