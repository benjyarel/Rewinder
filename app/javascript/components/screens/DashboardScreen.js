import React from "react";

import HorizontalMovieList from '../HorizontalMovieList';

class DashboardScreen extends React.Component {
  render() {
    return (
      <div>
        <HorizontalMovieList />
        <HorizontalMovieList />
      </div>
    );
  }
}

export default DashboardScreen ;
