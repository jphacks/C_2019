import React from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header'
import MovieList from './components/MovieList'
import Form from './components/Form'
import './App.css';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  state = {
    videos: [],
    now_videos: [],
  }

  // componentDidMount() {
  //   const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${this.state.keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;

  //   axios
  //   .get(url)
  //   .then(response => {
  //     this.setState({
  //       videos: response.data.items,
  //     });
  //   })
  //   .catch(() => {
  //        console.log('通信に失敗しました');
  //   });
  // }
  
  onSerchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;

    axios.get(url).then(response => {
      this.setState({
        videos: response.data.items,
      });
    }).catch(() => {
      console.log('通信に失敗しました');
    });
  }

  render() {
    console.log(this.state.videos);
    return (
      <>
      <Header>
        <Grid container alignItems="center" justify="center" spacing={3}>
          <Grid item xs={3}>
            <Form onSerchYouTube={this.onSerchYoutube} />
          </Grid>
        </Grid>
        <h1>動画一覧</h1>
        <MovieList />
      </Header>
    </>
    )
  }
}

export default App;
