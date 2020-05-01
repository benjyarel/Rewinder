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
    response = JSON.parse(open(url).read)["results"]
    movies = response.map do |movie|
      year =  movie["release_date"].empty? ? 0 : Date.parse(movie["release_date"]).year
      movie =  Movie.new(
          title: movie["original_title"],
          year:  year,
          synopsis: movie["overview"] ,
          poster_path: movie["poster_path"],
          tmdb_id: movie["id"]
        )
    end
    render json: movies
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :director, :synopsis, :poster_path)
  end

  def render_error
    render json: { errors: @movie.errors.full_messages }, status: :unprocessable_entity
  end
end
