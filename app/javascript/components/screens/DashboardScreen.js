import React from "react";

import HorizontalMovieList from '../HorizontalMovieList';

class DashboardScreen extends React.Component {

  render() {
    return (
      <div>
        <HorizontalMovieList title="Les films que vous voulez voir" elements="bookmarks" />
        <HorizontalMovieList title="Vos dernières critiques" elements="movieReviews" />
      </div>
    );
  }
}

export default DashboardScreen ;
