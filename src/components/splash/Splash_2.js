import { Box, Fade, Grid, makeStyles } from "@material-ui/core";
import { Info, InfoOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

// const textShadowCollection = [
//   {
//     textShadow:
//       "0px -6px 0 #212121, 0px -6px 0 #212121, 0px  6px 0 #212121, 0px  6px 0 #212121,-6px  0px 0 #212121,  6px  0px 0 #212121,-6px  0px 0 #212121,    6px  0px 0 #212121,-6px -6px 0 #212121,  6px -6px 0 #212121,-6px  6px 0 #212121,6px  6px 0 #212121,-6px  18px 0 #212121,0px  18px 0 #212121,6px  18px 0 #212121,0 19px 1px rgba(0,0,0,.1),0 0 6px rgba(0,0,0,.1),0 6px 3px rgba(0,0,0,.3),0 12px 6px rgba(0,0,0,.2),0 18px 18px rgba(0,0,0,.25),0 24px 24px rgba(0,0,0,.2),0 36px 36px rgba(0,0,0,.15)",
//   },
//   { textShadow: "-15px 5px 20px #ced0d3" },
// ];

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
    // textShadow:".03em .03em 0 ",
    // textShadow:"20px 10px 0px #ff99cc60,-15px -6px 0px #64a5b750",
    // textShadow:"5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b, 20px 20px 0px #017e7f, 25px 25px 0px #052939, 30px 30px 0px #c11a2b, 35px 35px 0px #c11a2b, 40px 40px 0px #c11a2b, 45px 45px 0px #c11a2b",
    textShadow: "6px 6px 0px rgba(0,0,0,0.2)",
    // textShadow: "4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)",
  },
  spin: {
    width: "100px",
    height: "100px",
    animationName: "$spin",
    animationDuration: "10000ms",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
  picDescriptionCard: {
    pointerEvents: "none",
    position: "fixed",
    marginTop: " 19%",
    padding: " 2% 3%",
    textAlign: " justify",
    background: "#000000b3",
  },
  picInfoWrapper: {
    pointerEvents: "none",
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

  // const trackMousePosition = (e) => {
  //   e.preventDefault();
  //   const clientX = e.clientX;
  //   const clientY = e.clientY;

  //   this.style.backgroundPositionX = clientX + "px";
  //   this.style.backgroundPositionY = clientY + "px";
  // };

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
    // event.preventDefault();
    setDisplayPicInfo(!displayPicInfo);
    console.log(displayPicInfo);
  };

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
          in={!displayPicInfo}
          timeout={{ enter: 1500, exit: 300 }}
          // style={{ transitionDelay: "1000ms" }}
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
          in={!displayPicInfo}
          timeout={{ enter: 1500, exit: 300 }}
          // style={{ transitionDelay: "1000ms" }}
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
        <Fade in={!displayPicInfo} timeout={{ enter: 300, exit: 300 }}>
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
          <Fade
            in={!displayPicInfo}
            timeout={{ appear: 10, enter: 2000, exit: 500 }}
          >
            <InfoOutlined
              onClick={(e) => displayPictureInfo(e)}
              fontSize="large"
            />
          </Fade>
        ) : (
          <Fade in={displayPicInfo} timeout={{ enter: 100, exit: 100 }}>
            <Info onClick={(e) => displayPictureInfo(e)} fontSize="large" />
          </Fade>
        )}
      </Grid>

      <Fade
        in={displayPicInfo}
        timeout={{ enter: 500, exit: 500 }}
        style={{ display: displayPicInfo ? "flex" : "none" }}
      >
        <Box className={classes.picDescriptionCard}>
          {nasaPic ? (
            <Box className={classes.picInfoWrapper}>
              <p>{nasaPic?.explanation}</p>
              <p>{nasaPic?.date}</p>
              <h2 style={{ marginBottom: 0 }}>{nasaPic?.title}</h2>
              <h6 style={{ marginTop: 0 }}>PC: {nasaPic?.copyright}</h6>
              {/* <Fade in={displayPicInfo} timeout={{ enter: 100, exit: 100 }}> */}
              {/* <Info onClick={(e) => displayPictureInfo(e)} fontSize="large" /> */}
              {/* </Fade> */}
            </Box>
          ) : (
            <h2>No picture information</h2>
          )}
        </Box>
      </Fade>
    </Grid>
  );
}
