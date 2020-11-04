import React from 'react'
import Grid from '@material-ui/core/Grid';

import YouTubeFrame from './YouTubeFrame';
import MovieCard from './MovieCardImage';

class WatchList extends React.Component {
    constructor(props){
        super(props);
        this.state = {now_videos: props.now_videos};
    }

    render() {
        console.log(this.props.now_videos[0])
        return (
          <Grid container>
              <Grid item xs={1}></Grid>
            <Grid item xs={8}>
              <YouTubeFrame video={this.state.now_videos[0]} />
            </Grid>
            <Grid item xs={3}>
              <Grid container>
                  {this.state.now_videos.map((video, i) => (
                    <Grid item xs={12} key={i}>
                      <MovieCard video={video}></MovieCard>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        )
    }
}

export default WatchList;
