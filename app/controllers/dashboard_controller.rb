class DashboardController < ApplicationController

  def show
    @users = User.all
    @movies = Movie.all
  end
end
