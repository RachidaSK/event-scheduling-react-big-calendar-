import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/header';
import Calendar from '../components/Calendar/calendar';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';



class Homepage extends Component {
  render() {
    return (
      <div>
          <Header />
          <Grid container>
            <Grid item md={10} style={{marginLeft: "auto", marginRight: "auto"}} >
              <Calendar mx="auto"></Calendar>
            </Grid>
          </Grid>
          
      </div>
      
    );
  }
}

export default Homepage;