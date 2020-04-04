class CreateMovieReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_reviews do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :rating
      t.string :foreign_link
      t.text :short_review
      t.text :directing_review
      t.text :acting_review
      t.text :sound_review
      t.text :story_review

      t.timestamps
    end
  end
end
