class Api::V1::MovieReviewsController < Api::V1::BaseController
  before_action :set_movie_review, only: [:show, :update]

  def index
    @movie_reviews = current_user.movie_reviews.order(created_at: :desc)
    render json: @movie_reviews
  end

  def show
    render json: @movie_review
  end

  def create
    @movie_review = MovieReview.new(movie_id: params[:movie_id], user: current_user)
    # S'ASSURER QUE UNE MOVIE REVIEW N EXISTE PAS DEJA DANS LE SCOPE DU CURRENT USER POUR CE FILM
    if @movie_review.save
      render json: @movie_review
    else
      render_error
    end
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
