import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from "../reducers"

import Footer from './Footer';
import DashboardScreen from './screens/DashboardScreen'
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))} >
        <BrowserRouter >
          <Switch>
            <Route path="/" exact component={DashboardScreen} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </Provider >
    );
  }
}
export default App;
