import React from "react";
import { connect } from 'react-redux';
import { fetchMovieReviewAndMovie } from '../../actions';
import MovieShowHeader from '../MovieShowHeader';

class MovieReviewShow extends React.Component {
  componentDidMount() {
    this.props.fetchMovieReviewAndMovie(this.props.match.params.id);
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }
    return (
      <MovieShowHeader movie={this.props.movie} />
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const movieReview = state.movieReviews.find(b => b.id === parseInt(id, 10))
  if (movieReview) {
    // if pour opérer en deux temps : 1° enregistrer dans redux le movieReview , 2° renvoyer encore ce movieReview, mais aussi le film
    return {
      movieReview: movieReview,
      movie: state.movies.find(m => m.id === movieReview.movie_id)
    }
  }
  return { movieReview: movieReview }
}




export default connect(mapStateToProps, { fetchMovieReviewAndMovie })(MovieReviewShow);
