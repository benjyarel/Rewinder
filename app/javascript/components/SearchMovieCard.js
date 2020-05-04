import React from 'react';
import { Link } from 'react-router-dom';

class SearchMovieCard extends React.Component  {
  truncateTitle(title) {
    // Truncate title by css not react
    if (!title) {
      return null;
    };
    return title.length > 20 ? `${title.substring(17, 0)}...` : title
  };
  renderImgSrc(movie) {
    const poster_url = `https://image.tmdb.org/t/p/w150_and_h225_bestv2/${movie.poster_path}`
    const placeholder_image = "https://via.placeholder.com/160x225/140100/FFFFFF/?text=No+image"
     return movie.poster_path ? poster_url : placeholder_image;
  }

  render() {
    const { movie } = this.props
   return (
     <Link to={{pathname:"/search/show", state:{movie: movie }}} className='movie-card' >
       <img src={this.renderImgSrc(movie)} alt='poster' />
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
