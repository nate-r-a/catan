Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :players
      resources :games
    end
  end
  root to: 'api/v1/games#index'
end
