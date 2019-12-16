import React from 'react';

import { Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import Img from './Img';
import Banner from './banner.jpg';
import DatePicker from '../DatePicker';
import LocationPicker from '../LocationPicker';
import './style.css';

function Header() {
  return (
    <div className="container">
      <Img src={Banner} alt="banner image" />
      <Grid
        className="headerForm"
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <LocationPicker />
        </Grid>
        <Grid item>
          <DatePicker />
        </Grid>
        <Grid item>
          <Fab color="primary" aria-label="edit">
            <SearchIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
