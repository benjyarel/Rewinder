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
  end

  def update
  end

  private

  def movie_review_params
    params.permit(:movie_review).require(:rating, :foreign_link, :short_review, :directing_review, :acting_review, :sound_review, :story_review)
  end

end
