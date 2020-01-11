import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Register from './components/Registration';
import Login from './components/Login';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import PrivateRoute from "./components/private-route/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/login" component={Login} />
        </div>
        <PrivateRoute exact path="/dashboard">
             <Dashboard/>
         </PrivateRoute>
      </Router>
    );
  }
}
export default App;
