import React from "react";
import { Link } from 'react-router-dom';
import MovieShowHeader from '../MovieShowHeader' ;
import { postBookmarkToServer } from '../../apis/server';

class SearchMovieShow extends React.Component {
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/search")
    }
  }

  handleClick = async () => {
    const { movie } = this.props.location.state;
    const response = await postBookmarkToServer(movie);
    this.props.history.push(`/bookmarks/${response}`)
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
        <MovieShowHeader movie={movie} />
        <div className="actions" style={{ marginBottom: "80px" }}>
          {this.renderActions()}
        </div>
      </>
    )
  }
}

export default SearchMovieShow;
