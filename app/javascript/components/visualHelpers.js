import React from 'react';

export const renderImgSrc = (movie, width, height) => {
  const poster_url = `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2/${movie.poster_path}`
  const placeholder_image = `https://via.placeholder.com/${width}x${height}/140100/FFFFFF/?text=No+image`
  return movie.poster_path ? poster_url : placeholder_image;
}

export const truncateString = (string) => {
    if (!string) {
      return null;
    };
    return string.length > 40 ? `${string.substring(37, 0)}...` : string
  };
