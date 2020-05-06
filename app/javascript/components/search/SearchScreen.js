import React from 'react';
import { connect } from "react-redux";
import { searchMovies, deleteSearchedMovies } from '../../actions'
import './SearchScreen';
import SearchMovieCard from './SearchMovieCard';


class SearchScreen extends React.Component {

  componentDidUpdate() {
    const footerButton = document.querySelector('.fas.fa-search');
    const search = document.querySelector('.search-container');
    footerButton.addEventListener("click", () => {
      if (this.props.moviesResult[0]) {
        this.props.deleteSearchedMovies();
      }
      search.style.display = "flex";
      search.style.opacity = 1;
    });
  }

  handleClick = () => {
    const query = document.querySelector(".form-control").value;
    const search = document.querySelector('.search-container')
    if (!query) {
      return null;
    };
    this.props.searchMovies(query);
    search.style.opacity = 0;
    setTimeout(() => { search.style.display = "none"; }, 500);

  }

  renderResults() {
    if (this.props.moviesResult[0] === undefined) {
      // TO DO : trouver un moyen de "catch" un retour de requete sans résutats
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
                <button type="submit" className="rwnd-button" onClick={this.handleClick}>Cherche Lycos</button>
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
