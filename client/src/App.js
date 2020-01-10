import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Register from './components/Registration';
import Login from './components/Login';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;
