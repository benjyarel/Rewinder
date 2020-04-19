import React from "react";

import HorizontalMovieList from '../HorizontalMovieList';

class DashboardScreen extends React.Component {
  state = {
    movies: [
      { "id": 1, "title": "La Haine", "year": 1995, "director": "Mathieu Kassovitz", "synopsis": "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.", "poster_path": "https://image.tmdb.org/t/p/w1280/3nVoVV0RmweOgDjebtI8CFv13rf.jpg", "created_at": "2020-04-06T14:43:35.202Z", "updated_at": "2020-04-06T14:43:35.202Z" },
      { "id": 2, "title": "Je vais bien ne t'en fais pas", "year": 2006, "director": "Mathieu Kassovitz", "synopsis": "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.", "poster_path": "https://image.tmdb.org/t/p/w1280/njWtYc2n9KMLHgwAzNhXCNFyjAG.jpg", "created_at": "2020-04-06T14:43:35.202Z", "updated_at": "2020-04-06T14:43:35.202Z" },
      { "id": 3, "title": "La Haine", "year": 1995, "director": "Mathieu Kassovitz", "synopsis": "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.", "poster_path": "https://image.tmdb.org/t/p/w1280/3nVoVV0RmweOgDjebtI8CFv13rf.jpg", "created_at": "2020-04-06T14:43:35.202Z", "updated_at": "2020-04-06T14:43:35.202Z" },
      { "id": 4, "title": "Je vais bien ne t'en fais pas", "year": 2006, "director": "Mathieu Kassovitz", "synopsis": "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.", "poster_path": "https://image.tmdb.org/t/p/w1280/njWtYc2n9KMLHgwAzNhXCNFyjAG.jpg", "created_at": "2020-04-06T14:43:35.202Z", "updated_at": "2020-04-06T14:43:35.202Z" }
    ],
    movieReviews: [
      { "id": 2, "movie_id": 1, "user_id": 1, "rating": 4, "foreign_link": "https://police-nationale.com", "short_review": " hackerman ?", "directing_review": "il touche le mec", "acting_review": "ils sont bons les acteurs", "sound_review": "Assassin de la police, woup woup!", "story_review": "L'important, c'est l'aterrisage.", "created_at": "2020-04-06T14:43:35.315Z", "updated_at": "2020-04-14T13:38:51.229Z" },
      { "id": 3, "movie_id": 1, "user_id": 1, "rating": 8, "foreign_link": "https://police-nationale.com", "short_review": " hackerman ?", "directing_review": "il touche le mec", "acting_review": "ils sont bons les acteurs", "sound_review": "Assassin de la police, woup woup!", "story_review": "L'important, c'est l'aterrisage.", "created_at": "2020-04-06T14:43:35.315Z", "updated_at": "2020-04-14T13:38:51.229Z" }
    ]
  }

  render() {
    return (
      <div>
        <HorizontalMovieList movies={this.state.movies} title="Les films que vous voulez voir" />
        <HorizontalMovieList reviews={this.state.movieReviews} movies={this.state.movies} title="Vos dernières critiques"/>
      </div>
    );
  }
}

export default DashboardScreen ;
