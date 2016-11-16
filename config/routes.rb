# frozen_string_literal: true
Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  scope 'api' do
    namespace :v1 do
      resources :messages, only: [:index, :create]
    end
  end
  get '*path', to: redirect('/', path: '?%{path}')
end
