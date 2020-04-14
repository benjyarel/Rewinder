class Api::V1::MovieReviewsController < Api::V1::BaseController

  def index
    movie_reviews = MovieReview.all
    render json: movie_reviews
  end

  def show
    movie_review = MovieReview.find(params[:id])
    render json: movie_review
  end

  def create
    movie_review = MovieReview.new(movie_review_params)
    if movie_review.save
      render :show
    else
      render_error
    end
  end

  def update
    movie_review = MovieReview.find(params[:id])
    render_error unless movie_review.update(movie_review_params)
  end

  private

  def movie_review_params
    params.require(:movie_review).permit(:movie_id, :user_id, :rating, :foreign_link, :short_review, :directing_review, :acting_review, :sound_review, :story_review)
  end

  def render_error
    render json: { errors: movie_review.errors.full_messages },
    status: :unprocessable_entity
  end
end
