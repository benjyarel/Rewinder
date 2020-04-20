import server from '../apis/server';

export const fetchBookmarks =  () => {
  return async (dispatch) => {
   // console.log('requete');
    const response = await server.get("/api/v1/bookmarks");
    dispatch({type: 'FETCH_BOOKMARKS', payload: response.data});
  }
}

export const fetchMovieReviews = () => {
  return async (dispatch) => {
    console.log('requete');
    const response = await server.get("/api/v1/movie_reviews");
    console.log(response.data)
    dispatch({ type: 'FETCH_MOVIEREVIEWS', payload: response.data });
  }
}

export const fetchMovie = (id) => {
  return async (dispatch) => {
   // console.log('requete');
    const response = await server.get(`api/v1/movies/${id}`);
    dispatch({type: 'FETCH_MOVIE', payload: response.data})
  }
}

