import React from "react";
import { Link } from 'react-router-dom';
import { postBookmark } from '../../apis/server';

class SearchMovieShow extends React.Component {
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/search")
    }
  }

  handleClick = () => {
    const { movie } = this.props.location.state;
    postBookmark(movie)
    this.props.history.push("/")
  }

  renderImgSrc(movie) {
    const poster_url = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`;
    const placeholder_image = "https://via.placeholder.com/320x450/140100/FFFFFF/?text=No+image";
    return movie.poster_path ? poster_url : placeholder_image;
  }

  renderActions() {
    return(
      <>
        <button onClick={this.handleClick} className='btn btn-warning'>Add to Wishlist</button>
        <Link to="/search" className="btn btn-warning">Return to Search</Link>
      </>
    );
  }



  render(){
    if (!this.props.location.state) {
      return null;
    }
    const { movie } = this.props.location.state;
    return(
      <div className="movie-show">
        <img src={this.renderImgSrc(movie)} alt='poster' />
        <div>{movie.title}</div>
        <p>{movie.synopsis}</p>
        <div className="actions" style={{marginBottom: "80px"}}>
          {this.renderActions()}
        </div>
      </div>
    )
  }
}

export default SearchMovieShow;
