import React from 'react';
import { connect } from "react-redux";
import './HorizontalMovieCard.scss'

class HorizontalMovieCard extends React.Component  {
  truncateTitle(title) {
    if (!title) {
      return null;
    };
    return title.length > 20 ? `${title.substring(17, 0)}...` : title
  }

  render(){
    const {movie} = this.props;
    if (!movie) {
      return null;
    };
    return (
      <div className='movie-card'>
        <img src={movie.poster_path} alt='poster' />
        <div className="content">
          <div className="content-top">
            {this.truncateTitle(movie.title)}
          </div>
          <div className="content-bottom">
            {movie.year}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state, ownProps) => {
  return { movie: state.movies.find(movie => movie.id === ownProps.movieId)}
}

export default connect(mapStateToprops)(HorizontalMovieCard);
