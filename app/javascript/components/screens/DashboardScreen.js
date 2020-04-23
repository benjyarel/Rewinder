import React from "react";

import HorizontalMovieList from '../HorizontalMovieList';

class DashboardScreen extends React.Component {

  render() {
    return (
      <div>
        <HorizontalMovieList title="Les films que vous voulez voir" display="bookmarks" />
        {/* <HorizontalMovieList title="Vos dernières critiques" display="movie-reviews"/> */}
      </div>
    );
  }
}

export default DashboardScreen ;
