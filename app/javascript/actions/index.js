import server from '../apis/server';

export const fetchBookmarks =  () => {
  return async (dispatch) => {
    const response = await server.get("/api/v1/bookmarks");
    console.log(response)
    dispatch({type: 'FETCH_BOOKMARKS', payload: response.data});
  }
}

export const fetchMovieReviews = () => {
  return async (dispatch) => {
    const response = await server.get("/api/v1/movie_reviews");
    dispatch({ type: 'FETCH_MOVIEREVIEWS', payload: response.data });
  }
}

export const fetchMovie = (id) => {
  return async (dispatch) => {
    const response = await server.get(`api/v1/movies/${id}`);
    dispatch({type: 'FETCH_MOVIE', payload: response.data})
  }
}

