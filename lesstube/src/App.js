import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header'
import MovieList from './components/MovieList'
import Form from './components/Form'
import WatchList from './components/WatchList'
import './App.css';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  state = {
    videos: [],
    now_videos: [],
  }

  addNowVideos = (video) => {
    const now_videos = this.state.now_videos.slice();
    now_videos.push(video);
    this.setState({now_videos: now_videos});
  }

  onSerchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=6&key=${YOUTUBE_API_KEY}`;

    axios.get(url).then(response => {
      this.setState({
        videos: response.data.items,
      });
    }).catch(() => {
      console.log('通信に失敗しました');
    });
  }


  render() {
    console.log(this.state.now_videos);
    return (
      <>
        <Router>
          <Header now_videos={this.state.now_videos}>
            <Switch>
              <Route path="/watch">
                <WatchList now_videos={this.state.now_videos} />
              </Route>
              <Route path="/end">
                <h1>Thank you for watching.</h1>
              </Route>
              <Route path="/">
                <Grid container alignItems="center" justify="center" spacing={3}>
                  <Grid item xs={3}>
                    <Form onSerchYouTube={this.onSerchYoutube} />
                  </Grid>
                </Grid>
                <h1>動画一覧</h1>
                <MovieList videos={this.state.videos} addNowVideos={this.addNowVideos} />
              </Route>
            </Switch>
        </Header>
      </Router>
    </>
    )
  }
}

export default App;
