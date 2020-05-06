import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "../reducers"

import Footer from './Footer';
import DashboardScreen from './dashboard/DashboardScreen';
import SearchScreen from './search/SearchScreen';
import SearchMovieShow from './search/SearchMovieShow';
import BookmarksIndex from './bookmarks/BookmarksIndex';
import BookmarksShow from './bookmarks/BookmarkShow';
import MovieReviewsIndex from './movieReviews/MovieReviewsIndex';
import MovieReviewShow from './movieReviews/MovieReviewShow';

import "./App.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))} >
        <HashRouter>
          <Switch>
            {/* <div className="footer-container"> */}
              <Route path="/" exact component={DashboardScreen} />
              <Route path="/search" exact component={SearchScreen} />
              <Route path='/search/show' component={SearchMovieShow} />
              <Route path="/bookmarks" exact component={BookmarksIndex} />
              <Route path="/bookmarks/:id" exact component={BookmarksShow} />
              <Route path="/movie_reviews" exact component={MovieReviewsIndex} />
              <Route path="/movie_reviews/:id" exact component={MovieReviewShow} />
            {/* </div> */}
          </Switch>
          <Footer />
        </HashRouter>
      </Provider >
    );
  }
}
export default App;
