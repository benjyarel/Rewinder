import React from "react";
import MovieShowHeader from "../MovieShowHeader"
import { connect } from "react-redux";
import { fetchBookmarkAndMovie } from '../../actions';
import { CreateMovieReviewToServer  } from '../../apis/server';

class BookmarkShow extends React.Component {
  componentDidMount() {
    this.props.fetchBookmarkAndMovie(this.props.match.params.id);
  }

  handleClick = async () => {
    const response = await CreateMovieReviewToServer(this.props.movie.id)
    this.props.history.push(`/movie_reviews/${response}`);
  }

  renderActions() {
    return (
      <div className="actions">
        <button onClick={this.handleClick} className='rwnd-button' >
          Rate It / Write a Review
        </button>
      </div>
    );
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }
    return (
      <div className="bookmark-show footer-container">
        <MovieShowHeader movie={this.props.movie} />
        {this.renderActions()}
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const bookmark = state.bookmarks.find(b => b.id === parseInt(id, 10))
  if (bookmark) {
    // if pour opérer en deux temps : 1° enregistrer dans redux le bookmark , 2° renvoyer encore ce bookmark, mais aussi le film
    return {
      bookmark: bookmark,
      movie: state.movies.find(m => m.id === bookmark.movie_id)
    }
  }
  return { bookmark: bookmark }
}
export default connect(mapStateToProps, { fetchBookmarkAndMovie })(BookmarkShow);
