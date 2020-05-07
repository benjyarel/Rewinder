import React from "react";
import './BookmarkShow';
import MovieShow from "../MovieShow"
import { connect } from "react-redux";
import { fetchBookmarkAndMovie } from '../../actions';

class BookmarkShow extends React.Component {
  componentDidMount() {
    this.props.fetchBookmarkAndMovie(this.props.match.params.id);
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }
    const { movie } = this.props;
    return (
        <MovieShow movie={movie} />
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
