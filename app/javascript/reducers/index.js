import { combineReducers } from 'redux';
import bookmarksReducer from './bookmarksReducer';
import moviesReducer from './moviesReducer';
import movieReviewsReducer from './movieReviewsReducer';

export default combineReducers({
  bookmarks: bookmarksReducer,
  movies: moviesReducer,
  movieReviews: movieReviewsReducer
});
