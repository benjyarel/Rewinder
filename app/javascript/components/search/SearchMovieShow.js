import React from "react";
import { Link } from 'react-router-dom';
import { renderImgSrc } from '../visualHelpers';
import { postBookmarkToServer } from '../../apis/server';

class SearchMovieShow extends React.Component {
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/search")
    }
  }

  handleClick = () => {
    const { movie } = this.props.location.state;
    postBookmarkToServer(movie);
    this.props.history.push("/")
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
        <img src={renderImgSrc(movie, 300, 450)} alt='poster' />
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
