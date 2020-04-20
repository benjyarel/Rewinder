import React from "react";
import './HorizontalMovieList.scss'
import HorizontalMovieCard from './HorizontalMovieCard';

class HorizontalMovieList extends React.Component {


  renderList() {
    return this.props.movies.map((movie) => {
      return < HorizontalMovieCard movie={movie} key={movie.id} />
    });
  }

  render() {
    return (
      <div className="horizontal-movie-list">
        <div className="header">
          <h4>{this.props.title}</h4>
        </div>
        <div className="horizontal-movies-container">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default HorizontalMovieList;
