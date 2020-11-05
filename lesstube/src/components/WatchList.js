import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Redirect} from 'react-router-dom';

import YouTubeFrame from './YouTubeFrame';
import MovieCard from './MovieCardImage';

class WatchList extends React.Component {
    state = {
      now_videos: this.props.now_videos,
    }

    removeFromWatchList = () => {
      const now_videos = this.state.now_videos.slice();
      now_videos.shift();
      this.setState({now_videos: now_videos});
    }

    render() {
        console.log(this.state.now_videos[0])
        return (
          <Grid container>
              <Grid item xs={1}></Grid>
            <Grid item xs={8}>
              {this.state.now_videos.length ? <YouTubeFrame video={this.state.now_videos[0]} removeFromWatchList={this.removeFromWatchList} /> : <Redirect to='/end' />}
            </Grid>
            <Grid item xs={3}>
              <Grid container>
                  {this.state.now_videos.slice(1).map((video, i) => (
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
