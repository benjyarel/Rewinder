import axios from 'axios';

export const server = axios.create({
  baseURL: '/'
});

export const postMovieToServer = async (movie) => {
  const response = await server.post("/api/v1/movies", { movie: movie });
  return { type: 'POST_MOVIE_DB', payload: response.data };
};

export const postBookmarkToServer = async (movie) => {
  await postMovieToServer(movie);
  server.post("/api/v1/bookmarks", { tmdb_id: `${movie.tmdb_id}` })
  return { type: "POST_BOOKMARK_DB" };
};
