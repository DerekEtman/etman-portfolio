import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "72vh",
    // width: "100%",
    overflow: "hidden",
	backgroundRepeat:"no-repeat",
	backgroundSize:"100%",
  },
  topName: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0",
    // position:"absolute",
    // top:50,
    // left:0,
    // right:0,
    // bottom:0
  },
  huge: {
    fontSize: "max(5vw,12.5vw)",
    margin: "10vh auto",
    height: "50%",
    // border:"1px solid blue"
  },
  spin: {
    // border:"1px solid red",
    width:'100px',
    height:'100px',
    animationName: "$spin",
    animationDuration:'10000ms',
    animationIterationCount:'infinite',
    animationTimingFunction:'linear',
    // transformOrigin:'50px 60px'
  },
  '@keyframes spin': {
    "0%": {
        transform:`rotate(0deg)`
    },
    "100%": {
        transform:`rotate(360deg)`
    }
  }
}));

export default function Splash_2() {
  const classes = useStyles();
  // const [setNameColor, nameColor] = useState({
  // 	color1: null,
  // 	color2: null,
  // });

  const [nasaPic, setNasaPic] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
      );
      const body = await resp.json();
      setNasaPic(body);
    };
    fetchData().catch(console.log);
  }, []);

  let randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const setBackgroundImage = async (e) => {
    let npic = await nasaPic?.url
	console.log(npic)
    document.getElementById('splash_container_2').style.backgroundImage = `url(${npic})`;
  };

  setBackgroundImage();
  console.log(nasaPic);
  const setFontColor = (e) => {
    console.log("e", randomColor());
    document.getElementById("name_1").style.color = "#" + randomColor();
  };

  return (
    <Grid container className={classes.container} id="splash_container_2">
      <Grid item className={classes.topName} xs={12}>
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
        <h1 className={classes.huge}>ETMAN</h1>
        {/* <h1 className={`${classes.huge} ${classes.spin}`}>*</h1> */}
      </Grid>
      <Grid item>
        <h3>*Under renovation.</h3>
      </Grid>
    </Grid>
  );
}
