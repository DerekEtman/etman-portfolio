import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import videojs from "video.js";
import useContentful from "../../hooks/useContentful";
import { VideoJS } from "../videoJSPlayer";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    // border:"1px solid green",
    height: "80vh",
    overflow: "hidden",
  },
  backgroundImage: {
    position: "fixed",
    height: "100vh",
    top: 0,
    zIndex: "-1",
    margin: "0 auto",
  },
}));

export default function ProjectPage(props) {
  const classes = useStyles();
  const [entry, setEntry] = useState();
  const { soundProjectID } = useParams();
  const { getEntry } = useContentful();

  const playerRef = useRef(null)
  
  useEffect(() => {
    getEntry(soundProjectID).then((retrievedProjectData) => {
      setEntry(retrievedProjectData);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const videoJSOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: `${entry?.fields.file.fields.file.url}`,
      type: `${entry?.fields.file.fields.file.contentType}`
    }]
  };

  console.log(videoJSOptions)

  const handlePlayerReady = (player) => {
    playerRef.current = player

    player.on('waiting', () => {
      videojs.log('player is waiting')
    })

    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }
  
  return (
    <Grid container spacing={3} className={classes.projectContainer}>
      <img
        src={entry?.fields?.thumbnailImage.fields.file.url}
        alt={`${entry?.fields?.thumbnailImage.fields.title}`}
        className={classes.backgroundImage}
      />
      <Grid item xs={12}>
        <h2>{entry?.fields?.title}</h2>
      </Grid>
      <Grid item xs={8}>
        <VideoJS options={videoJSOptions} onReady={handlePlayerReady} />
      </Grid>
      <Grid item xs={4}>
        <h3>{entry?.fields?.description}</h3>
      </Grid>
    </Grid>
  );
}
