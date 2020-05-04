import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './HorizontalMovieCard.scss'

class HorizontalMovieCard extends React.Component  {
  truncateTitle(title) {
    if (!title) {
      return null;
    };
    return title.length > 20 ? `${title.substring(17, 0)}...` : title
  }

  renderBottomContent(movie,rate) {
    return (!rate) ? <span>{movie.year}</span> : <span className='rating'>{rate} / 10</span>;
    }

  renderImgSrc(movie) {
    const poster_url = `https://image.tmdb.org/t/p/w150_and_h225_bestv2/${movie.poster_path}`
    const placeholder_image = "https://via.placeholder.com/160x225/140100/FFFFFF/?text=No+image"
    return movie.poster_path ? poster_url : placeholder_image;
  }

  render(){
    const {movie, rating} = this.props;
    if (!movie) {
      return <div>Loading...</div>;
    };

    const url = (!rating) ? `/bookmarks/${this.props.id}` : `/movie_reviews/${this.props.id}`

    return (
        <Link to={url} className='movie-card'>
          <img src={this.renderImgSrc(movie)} alt='poster' />
          <div className="content">
            <div className="content-top">
              {this.truncateTitle(movie.title)}
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
