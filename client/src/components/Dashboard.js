import React, { Component } from "react";
import {logoutUser} from '../utils/auth';
import {  withRouter } from "react-router-dom";

import { green } from '@material-ui/core/colors';
import { Terrain } from '@material-ui/icons'; 
import { fade } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, InputBase, Box, Paper, Tabs }from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from "@material-ui/core/styles";
import Products from './Products';
import dummyProducts from './dummyProducts';
import {searchProducts, getFavorites} from '../utils/productRequests';
import {initialiseUserFromLocalStorage } from '../utils/auth.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      //products : []
      user: {},
      products : dummyProducts
    };
  };

  componentDidMount() {
    if (localStorage.jwtToken) {
      const user = initialiseUserFromLocalStorage();
      console.log(user);
      this.setState({user});
      console.log('athenticated');
      getFavorites().then(favorites => console.log('fav result', favorites));

    }
  };

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

  onFavoriteClick= e => {
    e.preventDefault();
    console.log('favorites');
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Box mr={5}>
              <Typography variant="h2" component="h2" align="center" variant="h5" gutterBottom='true' >
                <Terrain style={{ color: green[500] }} fontSize="large" />
                SuperShop
              </Typography>
            </Box>
            <Box mr={6}>
            <form noValidate onSubmit={this.onSubmit}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  onChange={this.onChange}
                  value={this.state.query}
                  id="query"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                >
                </InputBase>
              </div>
            </form>
            </Box>

              <Button  variant='contained' onClick={this.onFavoriteClick} >
               Favorite 
              </Button>
            <Typography align="right" className={classes.title} variant="h6" noWrap>
              {this.state.user.name}
            </Typography>
            <Box ml={3}>
              <Button  onClick={this.onLogoutClick} >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Grid item xs={12}>
          {this.state.products.length > 0 &&
          <Paper className={classes.paper}>
            <Products products={this.state.products} />
          </Paper>
          }
        </Grid>
      </div>

    );
  }
}

export default withRouter(withStyles(styles,  { withTheme: true })(Dashboard));
