import React from "react";

import HorizontalMovieList from '../HorizontalMovieList';

class DashboardScreen extends React.Component {

  render() {
    return (
      <div>
        <HorizontalMovieList title="Les films que vous voulez voir" model="bookmarks" />
        <HorizontalMovieList title="Vos dernières critiques" model="movie_reviews" />
      </div>
    );
  }
}

export default DashboardScreen ;
