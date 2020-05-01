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

  renderBottomContent(movie,rate) {
    if (!rate) {
      return <span>{movie.year}</span>;
    };
      return  <span className='rating'>{rate} / 10</span>;
    }

  render(){
    const {movie, rating} = this.props;
    if (!movie) {
      return null;
    };
    const poster_url = `https://image.tmdb.org/t/p/w150_and_h225_bestv2/${movie.poster_path}`
    return (
        <div className='movie-card'>
          <img src={poster_url} alt='poster' />
          <div className="content">
            <div className="content-top">
              {this.truncateTitle(movie.title)}
            </div>
            <div className="content-bottom">
              {this.renderBottomContent(movie,rating)}
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
