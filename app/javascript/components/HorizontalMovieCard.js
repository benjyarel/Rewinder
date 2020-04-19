import React from 'react';

const HorizontalMovieCard = (props) => {
  const {movie} = props;
  return (
    <div>
      <p>{movie.title}</p>
    </div>
  );
}

export default HorizontalMovieCard;
