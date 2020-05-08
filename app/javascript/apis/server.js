import axios from 'axios';

export const server = axios.create({
  baseURL: '/'
});

export const postMovieToServer = async (movie) => {
  const response = await server.post("/api/v1/movies", { movie: movie });
  return response.data.id;
};

export const postBookmarkToServer = async (movie) => {
  const response = await  postMovieToServer(movie);
  const bookmark = await server.post("/api/v1/bookmarks", { movie_id: response })
  return bookmark.data.id;
};


export const CreateMovieReviewToServer = async (movieId) => {
  const response = await server.post("api/v1/movie_reviews",{movie_id: movieId});
  return response.data.id;
}
