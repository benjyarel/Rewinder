import React from 'react';
import { renderImgSrc, truncateString } from '../visualHelpers';
import { Link } from 'react-router-dom';

class SearchMovieCard extends React.Component  {
  render() {
    const { movie } = this.props
    return (
      <Link to={{pathname:"/search/show", state:{movie: movie }}} className='movie-card' >
        <img src={renderImgSrc(movie, 150, 225)} alt='poster' />
        <div className="content">
          <div className="content-top">
            {truncateString(movie.title)}
          </div>
          <div className="content-bottom">
            {movie.year}
          </div>
        </div>
      </Link>
    );
 };
}

export default SearchMovieCard
