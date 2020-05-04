import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "../reducers"

import Footer from './Footer';
import DashboardScreen from './screens/DashboardScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import SearchModal from './screens/SearchModal';
import MovieReviewsScreen from './screens/MovieReviewsScreen';
import BookmarksShow from './bookmarks/BookmarkShow';
import MovieReviewShow from './movieReviews/MovieReviewShow';

import "./App.scss";
import SearchMovieShow from './SearchMovieShow';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))} >
        <HashRouter>
          <Switch>
            <Route path="/" exact component={DashboardScreen} />
            <Route path="/bookmarks" exact component={BookmarksScreen} />
            <Route path="/bookmarks/:id" exact component={BookmarksShow} />
            <Route path="/search" exact component={SearchModal} />
            <Route path='/search/show' component={SearchMovieShow} />
            <Route path="/movie_reviews" exact component={MovieReviewsScreen} />
            <Route path="/movie_reviews/:id" exact component={MovieReviewShow} />
          </Switch>
          <Footer />
        </HashRouter>
      </Provider >
    );
  }
}
export default App;
