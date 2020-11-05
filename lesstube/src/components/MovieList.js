import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MovieCard from './MovieCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.videos.map((video, i) => (
          <Grid item xs={3} key={i}>
            <MovieCard video={video} addNowVideos={props.addNowVideos} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
