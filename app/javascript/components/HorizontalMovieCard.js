import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { renderImgSrc, truncateString } from './visualHelpers';
import './HorizontalMovieCard.scss'

class HorizontalMovieCard extends React.Component  {
  renderBottomContent(movie,rate) {
    return (!rate) ? <span>{movie.year}</span> : <span className='rating'>{rate} / 10</span>;
    }

  render(){
    const {movie, rating, id} = this.props;
    if (!movie) {
      return <div>Loading...</div>;
    };
    const url = (this.props.model === "bookmarks") ? `/bookmarks/${id}` : `/movie_reviews/${id}`
    return (
      <Link to={url} className='movie-card'>
        <img src={renderImgSrc(movie,150,225)} alt='poster' />
        <div className="content">
          <div className="content-top">
          {truncateString(movie.title)}
          </div>
          <div className="content-bottom">
            {this.renderBottomContent(movie,rating)}
          </div>
        </div>
      </Link>
    );

  }
}

const mapStateToprops = (state, ownProps) => {
  return { movie: state.movies.find(movie => movie.id === ownProps.movieId)}
}

export default connect(mapStateToprops)(HorizontalMovieCard);
