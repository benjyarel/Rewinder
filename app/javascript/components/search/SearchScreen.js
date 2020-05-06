import React from 'react';
import { connect } from "react-redux";
import { searchMovies, deleteSearchedMovies } from '../../actions'
import './SearchScreen';
import SearchForm from './SearchForm';
import SearchMovieCard from './SearchMovieCard';


class SearchScreen extends React.Component {

  componentDidMount() {
    const footerButton = document.querySelector('.fas.fa-search');
    const search = document.querySelector('.search-movie-box');
    const searchBackground = document.querySelector('.search-container');

    footerButton.addEventListener("click", () => {
      searchBackground.style.display = "flex";
      search.style.opacity = 1;
    });
  }

  handleClick = () => {
    const query = document.querySelector(".form-control").value;
    const search = document.querySelector('.search-movie-box');
    const searchBackground = document.querySelector('.search-container');
    if (!query) {
      return null;
    } else {
      this.props.searchMovies(query);
      search.style.opacity = 0;
      setTimeout(() => { searchBackground.style.display = "none"; }, 500);
    }
  }

  renderResults() {
    if (this.props.moviesResult[0] === undefined) {
      return (
        <div className='no-results'>
          <p>Pas de résultats à afficher</p>
        </div>
      );
    }
    return (
      <div className="results">
        {this.props.moviesResult.map((movie) => {
            return <SearchMovieCard movie={movie} key={movie.tmdb_id} />;
          }
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        <SearchForm  handleClick={this.handleClick}/>
        {this.renderResults()}
      </div>
    );
  }

  componentWillUnmount() {
    this.props.deleteSearchedMovies();
  }
};

const mapStateToProps = (state) => {
  return {moviesResult: state.searchMovies}
}

export default connect(mapStateToProps, { searchMovies, deleteSearchedMovies })(SearchScreen);
