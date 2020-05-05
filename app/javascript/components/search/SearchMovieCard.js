import React from 'react';
import { renderImgSrc } from '../visualHelpers';
import { Link } from 'react-router-dom';

class SearchMovieCard extends React.Component  {
  truncateTitle(title) {
    // Truncate title by css not react
    if (!title) {
      return null;
    };
    return title.length > 20 ? `${title.substring(17, 0)}...` : title
  };

  render() {
    const { movie } = this.props
   return (
     <Link to={{pathname:"/search/show", state:{movie: movie }}} className='movie-card' >
       <img src={renderImgSrc(movie, 150, 225)} alt='poster' />
       <div className="content">
         <div className="content-top">
           {this.truncateTitle(movie.title)}
         </div>
         <div className="content-bottom">
           <span>{movie.year}</span>
         </div>
       </div>
     </Link>
   );
 };
}

export default SearchMovieCard
