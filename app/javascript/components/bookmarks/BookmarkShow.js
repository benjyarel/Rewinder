import React from "react";
import { renderImgSrc } from '../visualHelpers'

class BookmarkShow extends React.Component {


  render() {

     const movie =  {
       title: 'La Haine',
       year: '1995',
       director: 'Mathieu Kassovitz',
       poster_path: '3nVoVV0RmweOgDjebtI8CFv13rf.jpg',
       synopsis: "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.",
       tmdb_id: 24
     }
    return (
      <div>
        <div className="movie-show">

          <img src={renderImgSrc(movie, 300, 450)} alt=""/>

          <div className="movie-show-block">
            <h3 className="movie-show-block-header">{movie.title}</h3>
            <div className="movie-show-block-content">
              <div className="info-lines">
                <div className="info-line">
                  <span className='line-title'>director :</span><span className='line-content'>{movie.director}</span>
                </div>
                <div className="info-line">
                  <span className='line-title'>Year :</span><span className='line-content'>{movie.year}</span>
                </div>
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
      </div>
    );
  }
};

export default BookmarkShow;
