import { Button, Grid, makeStyles } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import videojs from "video.js";
import useContentful from "../../hooks/useContentful";
import { VideoJS } from "../videoJSPlayer";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    // border:"1px solid green",
    height: "80vh",
    width: "99vw",
    overflow: "hidden",
    margin: " 0 auto",
    background:""
  },
  projectField: {
    width: "100vw",
  },
  backgroundImage: {
    position: "fixed",
    // width: "120%",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: "-1",
    margin: "0 auto",
  },
  videoPlayer: {
    border: "3px solid red",
  },
}));

export default function ProjectPage(props) {
  const classes = useStyles();
  const [entry, setEntry] = useState({});
  const [options, setOptions] = useState({
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    preload: "auto",
    sources: null,
  });
  const { soundProjectID } = useParams();
  const { getEntry } = useContentful();

  const playerRef = useRef(null);

  const navigate = useNavigate();

  const updateVideoSource = () => {
    console.log("updateVideoSource - entry", entry);
    let testVid1 = videojs("vid1");

    let sources = {
      src: entry.fields?.file.fields.file.url,
      type: entry.fields?.file.fields.file?.contentType,
    };
    console.log("updateVideoSource - sources", entry);
    testVid1.poster(entry.fields?.thumbnailImage.fields.file.url);

    testVid1.src(sources);
  };

  // const getVideoJSOptions = useCallback(async () => {
  //   // api call to get options
  //   // set options with what is returned{ options, onReady }

  //   setOptions({
  //     autoplay: false,
  //     controls: true,
  //     responsive: true,
  //     fluid: true,
  //     preload: "auto",
  //     // poster: entry?.fields?.thumbnailImage.fields.file.url,
  //     // src: entry?.fields.file.fields.file.url,
  //     // type: entry?.fields.file.fields.file.contentType
  //     sources: [
  //       {
  //         src: "//videos.ctfassets.net/ltkdzls1h1e4/mpPxSuoPCKGZUimPms6Ax/f491a1c570477682cc8e6bc964b0033f/Rain_On_A_Window_Water_Drops_HD_Stock_Video_Footage_Free.mp4",
  //         type: "video/mp4",
  //       },
  //     ],

  //     // sources: [
  //     //   {
  //     //     src: entry?.fields.file.fields.file.url,
  //     //     type: entry?.fields.file.fields.file.contentType,
  //     //   },
  //     // ],
  //   });
  // }, []);

  // checks to see if given value is empty array or object, and returns false if both
  const exists = (optionList) => {
    switch (typeof optionList) {
      case "array":
        return true;
      case "object":
        return true;
      default:
        return false;
    }
  };

  useEffect(() => {
    getEntry(soundProjectID).then((retrievedProjectData) => {
      console.log("retrieved data", retrievedProjectData);
      setEntry(retrievedProjectData);
    });
    // .then(getVideoJSOptions())
    // .then(() => {
    //   updateVideoSource();
    // });
  }, []);

  useEffect(() => {
    console.log("Second useEffect", entry);
    updateVideoSource();
  }, [entry]);

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

  return (
    <Grid container spacing={3} className={classes.projectContainer}>
      <img
        src={entry?.fields?.thumbnailImage.fields.file.url}
        alt={`${entry?.fields?.thumbnailImage.fields.title}`}
        className={classes.backgroundImage}
      />
      <Grid item xs={1}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant={"outlined"}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={11} className={classes.projectField}>
        <h2>{entry?.fields?.title}</h2>
      </Grid>
      <Grid item xs={8} className={classes.projectField}>
        {exists(options) ? (
          <VideoJS options={options} onReady={handlePlayerReady} />
        ) : (
          <div>something is here</div>
        )}

        <Button
          onClick={updateVideoSource}
          color={"secondary"}
          variant={"outlined"}
          startIcon={<Refresh />}
        >
          Refresh Video
        </Button>
      </Grid>

      <Grid item xs={3} className={classes.projectField}>
        <h3>{entry?.fields?.description}</h3>
      </Grid>
    </Grid>
  );
}
