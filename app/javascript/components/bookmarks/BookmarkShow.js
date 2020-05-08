import React from "react";
import MovieShowHeader from "../MovieShowHeader"
import { connect } from "react-redux";
import { fetchBookmarkAndMovie } from '../../actions';

class BookmarkShow extends React.Component {
  componentDidMount() {
    this.props.fetchBookmarkAndMovie(this.props.match.params.id);
  }

  handleClick() {
    // j'instancie un movie review new vide
    // je lui passe l'id du film
    // je push sur la moviereview show de l'instance qui vient d'être crée
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
