Rails.application.routes.draw do
  resources :posts
  root 'static_pages#home'
  get 'about', to: 'static_pages#about'
  get 'contact', to: 'static_pages#contact'
  get 'blog', to: 'posts#index', as: :blog # Alias dla bloga
  get "up" => "rails/health#show", as: :rails_health_check
end