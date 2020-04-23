class Api::V1::BookmarksController < Api::V1::BaseController
  before_action :set_bookmark, only: [:show, :update, :destroy]

  def index
    @bookmarks = current_user.bookmarks
    render json: @bookmarks
  end

  def show
    render json: @bookmark
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    render_error unless @bookmark.save
    render json: @bookmark
  end

  def update
    render_error unless @bookmark.update(bookmark_params)
    render json: @bookmark
  end

  def destroy
    @bookmark.destroy
    head :no_content
  end

  private

  def set_bookmark
    @bookmark = Bookmark.find(params[:id])
  end

  def bookmark_params
    params.require(:bookmark).permit(:movie_id, :user_id)
  end

  def render_error
    render json: { errors: @bookmark.errors.full_messages }, status: :unprocessable_entity
  end
end
