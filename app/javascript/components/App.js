import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import "./App.scss";

import Footer from './Footer';
import DashboardScreen from './screens/DashboardScreen'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route path="/" exact component={DashboardScreen} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
