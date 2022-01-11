import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "75vh",
		// width: "100%",
		overflow: "hidden",

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
		margin: 0,
		height:"50%",
		// border:"1px solid blue"
	},
}));

export default function Splash_2() {
	const classes = useStyles();
	// const [setNameColor, nameColor] = useState({
	// 	color1: null,
	// 	color2: null,
	// });

	let randomColor = () => {return Math.floor(Math.random() * 16777215).toString(16)};

	const setFontColor = (e) => {
        console.log("e", randomColor())
        document.getElementById("name_1").style.color = '#' + randomColor();
    };

	return (
		<Grid container className={classes.container}>
			<Grid item className={classes.topName} xs={12}>
				<h1 className={classes.huge} onMouseOver={setFontColor} id="name_1">
					DEREK
				</h1>
				<h1 className={classes.huge}>ETMAN*</h1>
			</Grid>
			<Grid item>
				<h3>*Under renovation.</h3>
			</Grid>
		</Grid>
	);
}
