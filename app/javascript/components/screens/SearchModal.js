import React from 'react';
import { connect } from "react-redux";
import { searchMovies } from '../../actions'
import './SearchModal';


class SearchModal extends React.Component {
  handleClick = () => {
    const query = document.querySelector(".form-control").value;
    if (!query) {
      return null;
    };
    this.props.searchMovies(query);
  }

  renderResults() {
    if (this.props.moviesResult[0] === undefined) {
      return <div>coucou</div>;
    }
    // rend la search transparente, puis la fait disparaitre
    const search = document.querySelector('.search-container')
    search.style.opacity = 0;
    setTimeout(() => { search.style.display = "none"; }, 500);


    return this.props.moviesResult.map((movie) => {
        return  <div>{movie.title}</div>;
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
};
const mapStateToProps = (state) => {
  return {moviesResult: state.searchMovies}
}

export default connect(mapStateToProps, { searchMovies })(SearchModal);
