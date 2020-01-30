import React, { Component } from "react";
import {logoutUser} from '../utils/auth';
import {searchProducts} from '../utils/search';
import {  withRouter } from "react-router-dom";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log('dashboard props', props);
    this.state = {
      query: "",
      products : []
    };
  }
  componentDidMount() {
    console.log('mount');
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
    searchProducts(this.state.query).then((products) => {
      this.setState({products});
    });
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
              welcome {this.props.user.name};
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
          {
            this.state.products.map(product =>
                <div key={product.id}>
                    <h4>{product.name_prefix} {product.full_name} </h4>
                    <p>{product.description}</p>
                    <img src={product.images.header} alt={`${product.name}`} width="200"/>
                    <hr/>
                </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
