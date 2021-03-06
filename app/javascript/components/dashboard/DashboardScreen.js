import React from "react";
import HorizontalMovieList from './HorizontalMovieList';

const DashboardScreen = () => {
    return (
      <div className="footer-container">
        <h1 className="main-title">Rewinder</h1>
        <HorizontalMovieList title="Les derniers films que vous voulez voir" model="bookmarks" />
        <HorizontalMovieList title="Vos dernières critiques" model="movie_reviews" />
      </div>
    );
};

export default DashboardScreen ;
