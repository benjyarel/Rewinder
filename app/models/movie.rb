class Movie < ApplicationRecord
  has_many :bookmarks
  has_many :movie_reviews
  validates :tmdb_id , uniqueness: true
end
