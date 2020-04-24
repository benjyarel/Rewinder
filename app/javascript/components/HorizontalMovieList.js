import React from "react";
import { connect } from 'react-redux';

import HorizontalMovieCard from './HorizontalMovieCard';
import { fetchMovieReviewsAndMovies, fetchBookmarksAndMovies } from '../actions';
import './HorizontalMovieList.scss'

class HorizontalMovieList extends React.Component {
  componentDidMount() {
    this.props.elements === "bookmarks" ? this.props.fetchBookmarksAndMovies() : this.props.fetchMovieReviewsAndMovies()
  }

  renderList() {
    if (this.props.elements === "bookmarks") {
      return this.props.bookmarks.map((bookmark) => {
        return < HorizontalMovieCard movieId={bookmark.movie_id} key={bookmark.id} />
      });
    } else {
      return this.props.movieReviews.map((movieReview) => {
        return < HorizontalMovieCard movieId={movieReview.movie_id} rating={movieReview.rating} key={movieReview.id} />
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
