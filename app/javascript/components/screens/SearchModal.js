import React from 'react';
import './SearchModal';

const SearchModal = () => {
  return (
    <div className="search-container">
      <div className="search-movie-box">
        <form className="search-movie-form">
          <div className="form-group">
            <label>Nom du film</label>
            <input type="movie" className="form-control" id="" placeholder="Cherche un film..." />
            <button type="submit" className="btn btn-warning ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
