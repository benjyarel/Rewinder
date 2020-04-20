import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import "./App.scss";
import reducers from "../reducers"

import Footer from './Footer';
import DashboardScreen from './screens/DashboardScreen'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)} >
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
