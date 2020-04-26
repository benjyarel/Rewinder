require 'json'
require 'open-uri'
class Api::V1::MoviesController < Api::V1::BaseController
  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end

  def create
    @movie = Movie.new(movie_params)
    render_error unless @movie.save
    render json: @movie
  end

  def search_movies
    query = params[:query]
    url ="https://api.themoviedb.org/3/search/movie?api_key=#{ENV['TMDB_API']}&language=fr-FR&query=#{query}"
    response = open(url).read
    good_response = JSON.parse(response)
    movies_array = good_response["results"]
    p movies_array.class
     movies_array.each do |movie|
      puts movie['title']
    end
    raise
    render json: response
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :director, :synopsis, :poster_path)
  end

  def render_error
    render json: { errors: @movie.errors.full_messages }, status: :unprocessable_entity
  end
end
