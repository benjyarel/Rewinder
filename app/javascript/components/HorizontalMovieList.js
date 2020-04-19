import React from "react";

import HorizontalMovieCard from './HorizontalMovieCard';

class HorizontalMovieList extends React.Component {
  state = {
    movies: [
      { "id": 1, "title": "La Haine", "year": 1995, "director": "Mathieu Kassovitz", "synopsis": "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.", "poster_path": "https://image.tmdb.org/t/p/w1280/3nVoVV0RmweOgDjebtI8CFv13rf.jpg", "created_at": "2020-04-06T14:43:35.202Z", "updated_at": "2020-04-06T14:43:35.202Z" },
      { "id": 2, "title": "Je vais bien ne t'en fais pas", "year": 2006, "director": "Mathieu Kassovitz", "synopsis": "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.", "poster_path": "https://image.tmdb.org/t/p/w1280/njWtYc2n9KMLHgwAzNhXCNFyjAG.jpg", "created_at": "2020-04-06T14:43:35.202Z", "updated_at": "2020-04-06T14:43:35.202Z" }
    ],
    title: "Les films que vous souhaitez voir"
  }

  renderList() {
    return this.state.movies.map((movie) => {
      return < HorizontalMovieCard movie={movie} key={movie.id} />
    });
  }

  render() {
    return (
      <div className="horizontal-movie-list">
        <div className="header">
          <h4>{this.state.title}</h4>
        </div>
        <div style={{display: "flex"}}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default HorizontalMovieList;
