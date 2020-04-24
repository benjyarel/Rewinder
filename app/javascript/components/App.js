import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from "../reducers"

import Footer from './Footer';

import DashboardScreen from './screens/DashboardScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))} >
        <HashRouter >
          <Switch>
            <Route path="/" exact component={DashboardScreen} />
            <Route path="/bookmarks" exact component={BookmarksScreen} />
          </Switch>
          <Footer />
        </HashRouter>
      </Provider >
    );
  }
}
export default App;
