import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
      };

      const _onReady = (e) => {
        e.target.pauseVideo();
    }

    const video = props.videos.map((video) => {
        return (
            <YouTube videoId={video.id.videoId} opts={opts} onReady={_onReady} />            
        )
    });

    return (
        <>
          {video}
        </>
    )

}

export default YouTubePlayer;
