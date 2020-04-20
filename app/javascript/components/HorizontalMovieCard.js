import React from 'react';
import { connect } from "react-redux";

import './HorizontalMovieCard.scss'

class HorizontalMovieCard extends React.Component  {
  truncateTitle(title) {
    return title.length > 20 ? `${title.substring(17, 0)}...` : title
  }

  render(){
    const {movie} = this.props;
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

const mapStateToprops = (state) => {
  return { toto: state.toto}
}

export default connect(mapStateToprops)(HorizontalMovieCard);
