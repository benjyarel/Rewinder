import React from 'react';
import { renderImgSrc } from './visualHelpers';

const MovieShow = (props) => {
  const { movie } = props ;
  return (
    <div className="movie-show">

      <img src={renderImgSrc(movie, 300, 450)} alt="" />

      <div className="movie-show-block">
        <h3 className="movie-show-block-header">{movie.title}</h3>
        <div className="movie-show-block-content">
          <div className="info-line">
            <span className='info-line-title'>Director :</span>
            <span className='info-line-content'>{movie.director}</span>
          </div>
          <div className="info-line">
            <span className='info-line-title'>Year :</span><span className='info-line-content'>{movie.year}</span>
          </div>
        </div>
      </div>

      <div className="movie-show-block">
        <h3 className="movie-show-block-header">Synopsis</h3>
        <div className="movie-show-block-content">
          <div className="paragraph-block">
            {movie.synopsis}
          </div>
        </div>
      </div>


    </div>
  );
};

export default MovieShow;
