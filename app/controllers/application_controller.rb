class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  LEGATO_OAUTH_CLIENT_ID='941417668948-sm0mnqcrvnojqanmn1ji9969sihkam74.apps.googleusercontent.com'
  LEGATO_OAUTH_SECRET_KEY='RITCXfzU8B-NHaH2pKfYmFKt'

  # GET client auth token
  # GET response json
  def google_access_token
    $client = OAuth2::Client.new(LEGATO_OAUTH_CLIENT_ID, LEGATO_OAUTH_SECRET_KEY, {
      :authorize_url => 'https://accounts.google.com/o/oauth2/auth',
      :token_url => 'https://accounts.google.com/o/oauth2/token'
    })
    @url = $client.auth_code.authorize_url({
      :scope => 'https://www.googleapis.com/auth/analytics.readonly',
      :redirect_uri => 'http://localhost:3000/oauth2callback',
      :access_type => 'offline'
    })
    redirect_to @url
  end


end
