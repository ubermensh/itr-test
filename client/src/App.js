import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
//import './App.css';
//import Homepage from './components/homepage';
import Registration from './components/registration';
import Login from './components/login';
//import Userpage from './components/userpage';

function App() {
return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
