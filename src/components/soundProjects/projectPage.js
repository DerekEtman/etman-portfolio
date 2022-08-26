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
    margin:" 0 auto",

  },
  backgroundImage: {
    position: "fixed",
    width:"100%",
    height: "100vh",
    top: 0,
    left:0,
    zIndex: "-1",
    // margin: "0 auto",
  },
}));

export default function ProjectPage(props) {
  const classes = useStyles();
  const [entry, setEntry] = useState();
  const [options, setOptions] = useState({});
  const { soundProjectID } = useParams();
  const { getEntry } = useContentful();

  const playerRef = useRef(null);

  const getVideoJSOptions = React.useCallback(async () => {
    // api call to get options
    // set options with what is returned
    setOptions({
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      preload: "auto",
      poster: entry?.fields?.thumbnailImage.fields.file.url,
      // src: entry?.fields.file.fields.file.url,
      // type: entry?.fields.file.fields.file.contentType
      src: "//videos.ctfassets.net/ltkdzls1h1e4/mpPxSuoPCKGZUimPms6Ax/f491a1c570477682cc8e6bc964b0033f/Rain_On_A_Window_Water_Drops_HD_Stock_Video_Footage_Free.mp4",
      type: "video/mp4",
    });
  }, []);

  // checks to see if given value is empty array or object, and returns false if both
  const exists = (optionList) => {
    // console.log("tearEFA", typeof(optionList))

    switch (typeof optionList) {
      case "array":
        return true
      case "object":
        return true
      default:
        return false;
    }
  };

  useEffect(() => {
    getEntry(soundProjectID).then((retrievedProjectData) => {
      // console.log("retrieved data", retrievedProjectData);
      setEntry(retrievedProjectData);
    });
    getVideoJSOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log("Second useEffect", entry);
  // }, [entry]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // console.log("HandlePlayerREady Player:", playerRef);

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  console.log("options",   exists(options));


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
      {exists(options) ? (
        <Grid item xs={8}>
          <VideoJS options={options} onReady={handlePlayerReady} />
        </Grid>
      ) : (
        <div>something is here</div>
      )}

      <Grid item xs={4}>
        <h3>{entry?.fields?.description}</h3>
      </Grid>
    </Grid>
  );
}
