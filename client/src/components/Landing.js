import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { green } from '@material-ui/core/colors';
import { Container,Box, Paper, Typography, Grid , AppBar,Button  } from '@material-ui/core';
import { Terrain } from '@material-ui/icons'; 
class Landing extends Component {
  render() {
    return (
      <Container>
        <AppBar position="static">
            <Typography variant="h2" component="h2" align="center" variant="h5" gutterBottom="true ">
            <Terrain style={{ color: green[500] }} fontSize="large" />
              SuperShop
            </Typography>
        </AppBar>
          <Box mt={2}>
        <Paper >
          <Grid container spacing={2}  justify="center" >
            <Grid item>
              <Button variant="contained" color = "primary" href="/register">
                Register              </Button>
            </Grid>
            <Grid item >
              <Button variant="contained" color = "primary" href="/login">
                Log In               </Button>
            </Grid>
          </Grid>
        </Paper>
          </Box>
      </Container>
    );
  }
}
export default withRouter(Landing);
