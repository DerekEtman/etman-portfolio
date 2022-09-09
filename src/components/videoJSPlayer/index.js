import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  console.log("VideoJS Component - options, onReady", options)
  useEffect(() => {
    // Check if video.js player is the only initialized

    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));


      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current
    return () => {
        if(player){
            player.dispose()
            playerRef.current = null
        }
    }
  },[playerRef])

  return(
    <div data-vjs-player>
        <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  )
};
