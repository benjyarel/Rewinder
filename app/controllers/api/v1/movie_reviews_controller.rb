class Api::V1::MovieReviewsController < Api::V1::BaseController
  before_action :set_movie_review, only: [:show, :update]
  def index
    @movie_reviews = current_user.movie_reviews
    render json: @movie_reviews
  end

  def show
    render json: @movie_review
  end

  def create
    @movie_review = MovieReview.new(movie_review_params)
    render_error unless @movie_review.save
    render json: @movie_review
  end

  def update
    render_error unless @movie_review.update(movie_review_params)
    render json: @movie_review
  end

  private

  def set_movie_review
    @movie_review = MovieReview.find(params[:id])
  end

  def movie_review_params
    params.require(:movie_review).permit(:movie_id, :user_id, :rating, :foreign_link, :short_review, :directing_review, :acting_review, :sound_review, :story_review)
  end

  def render_error
    render json: { errors: @movie_review.errors.full_messages }, status: :unprocessable_entity
  end
end
