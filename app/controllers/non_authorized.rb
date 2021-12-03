# app/controllers/fallback_controller.rb
class NonAuthorizedController < ActionController::Base
    def index
      render file: 'public/index.html'
    end
end
  