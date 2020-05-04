import{ server } from '../apis/server';
import _ from 'lodash';

export const fetchBookmarks =  () => {
  return async (dispatch) => {
    const response = await server.get("/api/v1/bookmarks");
    dispatch({type: 'FETCH_BOOKMARKS', payload: response.data});
  };
};

export const fetchMovieReviews = () => {
  return async (dispatch) => {
    const response = await server.get("/api/v1/movie_reviews");
    dispatch({ type: 'FETCH_MOVIEREVIEWS', payload: response.data });
  };
};

export const fetchMovie = (id) => {
  return async (dispatch) => {
    const response = await server.get(`api/v1/movies/${id}`);
    dispatch({type: 'FETCH_MOVIE', payload: response.data});
  }
}

export const fetchBookmarksAndMovies = () => {
  return async (dispatch, getState) => {
  await dispatch(fetchBookmarks());
  const moviesIds = _.uniq( _.map( getState().bookmarks, 'movie_id') );
  moviesIds.forEach(id => dispatch(fetchMovie(id)))
  };
};

export const fetchMovieReviewsAndMovies = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchMovieReviews());
    const moviesIds = _.uniq(_.map(getState().movieReviews, 'movie_id'));
    moviesIds.forEach(id => dispatch(fetchMovie(id)));
  };
};

export const searchMovies = (query) => {
  return async (dispatch) => {
    const response = await server.post('/api/v1/search_movies', {query: `${query}`});
    dispatch({type: "SEARCH_MOVIES", payload: response.data})
  };
};

export const deleteSearchedMovies = () => {
  return { type: "DELETE_SEARCHED_MOVIES" }
};

export const postMovie = async (movie) => {
 const response = await server.post("/api/v1/movies", {movie: movie});
  return {type: 'POST_MOVIE_DB', payload: response.data};
};

export const postBookmark = async (movie) => {
  await postMovie(movie);
  server.post("/api/v1/bookmarks", { tmdb_id: `${movie.tmdb_id}` })
  return {type: "POST_BOOKMARK_TO_DB"};
};
