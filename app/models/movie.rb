class Movie < ApplicationRecord
  has_many :bookmarks
  has_many :movie_reviews
end
