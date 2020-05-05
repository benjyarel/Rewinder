import React from 'react';
import { connect } from "react-redux";
import { searchMovies, deleteSearchedMovies } from '../../actions'
import './SearchScreen';
import SearchMovieCard from './SearchMovieCard';


class SearchScreen extends React.Component {

  handleClick = () => {
    const query = document.querySelector(".form-control").value;
    if (!query) {
      return null;
    };
    this.props.searchMovies(query);
    // rend la search transparente, puis la fait disparaitre
    const search = document.querySelector('.search-container')
    search.style.opacity = 0;
    setTimeout(() => { search.style.display = "none"; }, 500);

  }

  renderResults() {
    if (this.props.moviesResult[0] === undefined) {
      return <div>Pas de résultats à afficher</div>;
    }

    return this.props.moviesResult.map((movie) => {
      return <SearchMovieCard movie={movie} key={movie.tmdb_id}/>;
    })
  }

  render() {
    return (
      <div>
        <div className="search-container">
          <div className="search-movie-box">
            <form className="search-movie-form">
              <div className="form-group">
                <label>Quel film voulez-vous chercher ?</label>
                <input type="movie" className="form-control" placeholder="Nom du film..." />
                <button type="submit" className="btn btn-warning " onClick={this.handleClick}>Cherche Lycos</button>
              </div>
            </form>
          </div>
        </div>
        <div className="results">
          {this.renderResults()}
        </div>
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
