import React, { Component } from "react";
import {logoutUser} from '../utils/auth';
import {  withRouter } from "react-router-dom";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    logoutUser(this.props.history);
  };

render() {
return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              dashboard
            </h4>
            <button
              onClick={this.onLogoutClick}
              className="btn btn-large"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
