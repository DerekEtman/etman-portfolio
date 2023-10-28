import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container1: {
    minHeight: "100vh",
    padding: "2rem",
    margin: "3vh auto",
    backgroundColor: "Black",
    color: "white",
    fontFamily: "'Bebas Neue', cursive",
    // overflow:"hidden",
    // backgroundImage: `url(${PianoImage})`,
    // backgroundSize: "300%",
    // backgroundPosition: "center",
  },
  textWrapper: {
    padding: "2%",
    height: "60vh",
  },
  projectList: {
    // width:'90%',
  },
}));

export default function SoundPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container1}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <h1>Hand Crafted Tunes</h1>

        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          title="DerekEtmanSoundCloud"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/77942380&color=%23868686&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            "line-break": "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/dereketman"
            title="Derek Etman"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Derek Etman
          </a>
          ·
          <a
            href="https://soundcloud.com/dereketman/sets/piano-pieces"
            title="Piano pieces"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Piano pieces
          </a>
        </div>
      </Grid>

      <Grid item xs={2} />
    </Grid>
  );
}
