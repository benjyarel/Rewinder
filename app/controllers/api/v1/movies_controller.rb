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

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :director, :synopsis, :poster_path)
  end

  def render_error
    render json: { errors: @movie.errors.full_messages }, status: :unprocessable_entity
  end
end
