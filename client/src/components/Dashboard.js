import React, { Component } from "react";
import {logoutUser} from '../utils/auth';
import {searchOnliner} from '../utils/search';
import {  withRouter } from "react-router-dom";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
      searchOnliner(this.state.query);
    };

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

            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.query}
                  id="query"
                  type="text"
                />
                <label htmlFor="query">Search products</label>
              </div>
              
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
