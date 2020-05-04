import React from "react";
import { connect } from 'react-redux';
import { postBookmark, postMovie } from '../actions';

class SearchMovieShow extends React.Component {
  componentDidMount() {
    if (!this.props.location.state.movie) {
      // TODO : push to la search;
    }
  }

  handleClick = () => {
    const { movie } = this.props.location.state;
    this.props.postBookmark(movie);
  //  this.props.postMovie(movie)

  }

  renderImgSrc(movie) {
    const poster_url = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`;
    const placeholder_image = "https://via.placeholder.com/320x450/140100/FFFFFF/?text=No+image";
    return movie.poster_path ? poster_url : placeholder_image;
  }

  renderActions() {
    return(
      <>
        <button onClick={this.handleClick} className='btn btn-primary'>Add to Wishlist</button>
      </>
    );
  }



  render(){
    const { movie } = this.props.location.state;
    return(
      <div className="movie-show">
        <div className="actions">
          {this.renderActions()}
        </div>
        <img src={this.renderImgSrc(movie)} alt='poster' />
        <div>{movie.title}</div>
        <p>{movie.synopsis}</p>
      </div>
    )
  }
}

export default connect(null, { postMovie, postBookmark })(SearchMovieShow);
