import * as React from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chip: {
    borderRadius: 44,
    height: 60,
    fontFamily: 'Raleway',
    fontSize: 22,
  },
});

function ButtonPokemon({ name, url, click }) {

  const classes = useStyles();

  function handlePokemon () {
    click(url)
  }

  return (
    <Grid item >
      <Chip className={classes.chip} spacing={0.5} label={name} color="primary" onClick={handlePokemon} />
    </Grid>
  );
}

export default ButtonPokemon;