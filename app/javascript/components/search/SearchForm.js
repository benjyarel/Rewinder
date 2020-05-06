import React from 'react';
import ReactDOM from 'react-dom';
import "./SearchForm";


const SearchForm = (props) => {
  return ReactDOM.createPortal(
    <div className="search-container">
      <div className="search-movie-box">
        <form className="search-movie-form">
          <div className="form-group">
            <label>Quel film voulez-vous chercher ?</label>
            <input type="movie" className="form-control" placeholder="Nom du film..." />
            <button type="submit" className="rwnd-button" onClick={props.handleClick}>Cherchez</button>
          </div>
        </form>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default SearchForm;
