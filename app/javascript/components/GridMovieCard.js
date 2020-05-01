import React from 'react';

class GridMovieCard extends React.Component  {
  truncateTitle(title) {
    if (!title) {
      return null;
    };
    return title.length > 20 ? `${title.substring(17, 0)}...` : title
  };

  render() {
    const { movie } = this.props
    const poster_url = `https://image.tmdb.org/t/p/w150_and_h225_bestv2/${movie.poster_path}`
     const placeholder_image = "https://via.placeholder.com/160x225/140100/FFFFFF/?text=No+image"
    // Truncate title by css not react
   return (
     <div className='movie-card'>
       <img src={ movie.poster_path ? poster_url : placeholder_image } alt='poster' />
       <div className="content">
         <div className="content-top">
           {this.truncateTitle(movie.title)}
         </div>
         <div className="content-bottom">
           <span>{movie.year}</span>
         </div>
       </div>
     </div>
   );
 };
}

export default GridMovieCard
