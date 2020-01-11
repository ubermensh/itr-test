import React, { Component } from "react";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    console.log('log out');
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

export default Dashboard;
