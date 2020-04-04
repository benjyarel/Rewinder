class User < ApplicationRecord
  has_many :bookmarks
  has_many :movie_reviews
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
