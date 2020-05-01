Rails.application.routes.draw do
  devise_for :users

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :movie_reviews, only: [:index, :show, :update, :create]
      resources :movies, only:[:show, :create]
      post "search_movies", to: "movies#search_movies"
      resources :bookmarks, only:[:index, :show, :create, :update, :destroy]
    end
  end

  root to: 'pages#home'
end
