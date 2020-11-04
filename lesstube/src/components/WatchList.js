import React from 'react'
import Grid from '@material-ui/core/Grid';

import YouTubeFrame from './YouTubeFrame';

class WatchList extends React.Component {
    state = {
        now_videos: [],
    }

    render() {
        console.log(this.props.now_videos[0])
        return (
          <Grid container>
            <Grid item xs={8}>
              <YouTubeFrame video={this.props.now_videos[0]} />
            </Grid>
            <Grid item xs={4}>
              動画のリスト
            </Grid>
          </Grid>
        )
    }
}

export default WatchList;
