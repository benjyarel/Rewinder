import React from "react";
import { connect } from 'react-redux';
import { fetchMovieReviewsAndMovies, fetchBookmarksAndMovies } from '../../actions';
import HorizontalMovieCard from '../HorizontalMovieCard';
import './HorizontalMovieList.scss'

class HorizontalMovieList extends React.Component {
  componentDidMount() {
    this.props.model === "bookmarks" ? this.props.fetchBookmarksAndMovies() : this.props.fetchMovieReviewsAndMovies()
  }

  renderList() {
    if (this.props.model === "bookmarks") {
      return this.props.bookmarks.map((bookmark) => {
        return (
          < HorizontalMovieCard
            model={this.props.model}
            movieId={bookmark.movie_id}
            key={bookmark.id}
            id={bookmark.id}
          />
        )
      });
    } else {

      return this.props.movieReviews.map((movieReview) => {
        const movieKey = `MovieReview-${movieReview.id}`
        return (
          < HorizontalMovieCard
            model={this.props.model}
            movieId={movieReview.movie_id}
            rating={movieReview.rating}
            key={movieKey}
            id={movieReview.id}
            />
        )
      });
    }
  }

  render() {
    return (
      <div className="horizontal-movie-list">
        <div className="header">
          <h4>{this.props.title}</h4>
        </div>
        <div className="horizontal-movies-container">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks,
    movieReviews: state.movieReviews,
    movies: state.movies
  }
}
export default connect(mapStateToProps, { fetchMovieReviewsAndMovies, fetchBookmarksAndMovies })(HorizontalMovieList);
