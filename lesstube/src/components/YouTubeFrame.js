import YouTube from 'react-youtube';

const YouTubePlayer = (props) => {
    const opts = {
        height: '475',
        width: '800',
        playerVars: {
          autoplay: 1,
        },
      };

    const _onEnd = () => {
      props.removeFromWatchList();
    }

    return (
      <YouTube videoId={props.video.id.videoId} opts={opts} onEnd={_onEnd}/>
    )
}

export default YouTubePlayer;
