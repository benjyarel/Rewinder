import React from "react";
import { Link } from 'react-router-dom';
import MovieShow from '../MovieShow' ;
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
    setTimeout(() => {
      this.props.history.push("/")
    }, 100);
  }

  renderActions() {
    return(
      <>
        <button
          onClick={this.handleClick}
          className='rwnd-button'
        >
          Add to Wishlist
        </button>
        <Link to="/search" >
          <button className='rwnd-button'>Return to Search</button>
        </Link>
      </>
    );
  }

  render(){
    if (!this.props.location.state) {
      return null;
    }
    const { movie } = this.props.location.state;
    return(
      <>
        <MovieShow movie={movie} />
        <div className="actions" style={{ marginBottom: "80px" }}>
          {this.renderActions()}
        </div>
      </>
    )
  }
}

export default SearchMovieShow;
