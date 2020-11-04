import YouTube from 'react-youtube';

const YouTubePlayer = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
      };
    return (
      <YouTube videoId={props.video.id.videoId} opts={opts} />
    )
}

export default YouTubePlayer;
