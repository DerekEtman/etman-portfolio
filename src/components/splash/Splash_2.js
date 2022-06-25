import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Fade,
  Grid,
  Icon,
  makeStyles,
  Slide,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Info, InfoOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "72vh",
    // width: "100%",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    animationName: "$fadein",
    animationDuration: "5s",
    // animationDelay:"2000ms"
  },
  topName: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
  },
  huge: {
    fontSize: "max(5vw,12.5vw)",
    margin: "10vh auto",
    height: "50%",
    // textShadow:" -15px 5px 20px #ced0d3",
    // color:"#000000",
  },
  spin: {
    width: "100px",
    height: "100px",
    animationName: "$spin",
    animationDuration: "10000ms",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
  picDescriptionCard:{
    position:"fixed",
    marginTop:" 19%",
    padding:" 2% 3%",
    textAlign:" justify",
  },
  "@keyframes spin": {
    "0%": {
      transform: `rotate(0deg)`,
    },
    "100%": {
      transform: `rotate(360deg)`,
    },
  },
  "@keyframes fadein": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

export default function Splash_2() {
  const classes = useStyles();
  // const [setNameColor, nameColor] = useState({
  // 	color1: null,
  // 	color2: null,
  // });

  const [nasaPic, setNasaPic] = useState();
  const [displayPicInfo, setDisplayPicInfo] = useState(false);

  console.log("nasa pic info:", nasaPic);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
      );
      const body = await resp.json();
      setNasaPic(body);
    };

    fetchData().catch((err) => console.log("failed to fetch data", err));
  }, []);

  let randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const trackMousePosition = (e) => {
    e.preventDefault();
    const clientX = e.clientX;
    const clientY = e.clientY;

    this.style.backgroundPositionX = clientX + "px";
    this.style.backgroundPositionY = clientY + "px";
  };

  const setBackgroundImage = async (e) => {
    let npic = await nasaPic?.hdurl;
    console.log(npic);
    document.getElementById(
      "splash_container_2"
    ).style.backgroundImage = `url(${npic})`;
  };

  const setFontColor = (e) => {
    document.getElementById("name_1").style.color = "#" + randomColor();
  };

  const displayPictureInfo = (event) => {
    event.preventDefault();
    setDisplayPicInfo(!displayPicInfo);
  };

  console.log(displayPicInfo);

  setBackgroundImage();
  return (
    <Grid
      container
      className={classes.container}
      id="splash_container_2"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item className={classes.topName} xs={12}>
        <Fade
          in={true}
          timeout={{ enter: 1500 }}
          style={{ transitionDelay: "1000ms" }}
        >
          <h1
            className={classes.huge}
            onMouseOver={() => {
              setFontColor();
              // setBackgroundImage();
            }}
            id="name_1"
          >
            DEREK
          </h1>
        </Fade>
        <Fade
          in={true}
          timeout={{ enter: 1500 }}
          style={{ transitionDelay: "1000ms" }}
        >
          <h1 className={classes.huge}>ETMAN</h1>
        </Fade>
        {/* <h1 className={`${classes.huge} ${classes.spin}`}>*</h1> */}
      </Grid>

      {/* <Grid item xs={10}>
        <Fade in={displayPicInfo} timeout={{ enter: 500, exit: 500 }}>
          {nasaPic ? (
            <p>{nasaPic?.explanation}</p>
          ) : (
            <h2>No picture information</h2>
          )}
        </Fade>
      </Grid> */}

      <Grid item xs={10}>
        <Fade in={!displayPicInfo} timeout={{ enter: 500, exit: 500 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <h2 style={{ marginBottom: 0 }}>{nasaPic?.title}</h2>
            <h6 style={{ marginTop: 0 }}>PC: {nasaPic?.copyright}</h6>
          </Box>
        </Fade>
      </Grid>
      <Grid item xs={1}>
        {!displayPicInfo ? (
          <Fade in={!displayPicInfo} timeout={{ appear:10, enter: 2000, exit: 500 }}>
            <InfoOutlined
              onMouseOver={(e) => displayPictureInfo(e)}
              fontSize="large"
            />
          </Fade>
        ) : (
          <Fade in={displayPicInfo} timeout={{ enter: 100, exit: 100 }}>
            <Info onMouseOut={(e) => displayPictureInfo(e)} fontSize="large" />
          </Fade>
        )}
      </Grid>

      <Fade
        in={displayPicInfo}
        timeout={{ enter: 500,exit: 100 }}
        style={{ display: (displayPicInfo ? "flex" : "none") }}
      >
        <Box class={classes.picDescriptionCard}>
          {nasaPic ? (
            <span>

            <p>{nasaPic?.explanation}</p>
            <p>{nasaPic?.date}</p>
            <h2 style={{ marginBottom: 0 }}>{nasaPic?.title}</h2>
            <h6 style={{ marginTop: 0 }}>PC: {nasaPic?.copyright}</h6>
            </span>
          ) : (
            <h2>No picture information</h2>
          )}
        </Box>
      </Fade>
    </Grid>
  );
}
