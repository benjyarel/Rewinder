import axios from 'axios';

export const server = axios.create({
  baseURL: '/'
});

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/'
});
