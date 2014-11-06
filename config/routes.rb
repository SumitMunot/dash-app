Rails.application.routes.draw do
  resources :reports

  root to: 'visitors#report'
  devise_for :users
  resources :users
  get '/oauth2callback' => 'reports#outh_response', as: 'reports_outh'
  get '/report'	=> 'visitors#report', as: 'vistors_reports'
end
