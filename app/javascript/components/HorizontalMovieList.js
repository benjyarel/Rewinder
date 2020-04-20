import React from "react";
import { connect } from 'react-redux';

import HorizontalMovieCard from './HorizontalMovieCard';
import { fetchBookmarks, fetchMovieReviews } from '../actions';
import './HorizontalMovieList.scss'

class HorizontalMovieList extends React.Component {
  componentDidMount() {
    this.props.display === "bookmarks" ? this.props.fetchBookmarks() : this.props.fetchMovieReviews()
  }

  renderList() {
    if (this.props.display === "bookmarks") {
      return this.props.bookmarks.map((bookmark) => {
        return < HorizontalMovieCard movieId={bookmark.movie_id} key={bookmark.id} />
      });
    } else {
      return this.props.movieReviews.map((movieReview) => {
        return < HorizontalMovieCard movieId={movieReview.movie_id} key={movieReview.id} />
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
    movieReviews: state.movieReviews
  }
}
export default connect(mapStateToProps, { fetchBookmarks, fetchMovieReviews })(HorizontalMovieList);
