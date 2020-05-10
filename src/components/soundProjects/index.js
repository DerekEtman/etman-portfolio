import React from "react";
import { makeStyles } from "@material-ui/core";
import PianoImage from "./assets/piano.jpg"

const useStyles = makeStyles((theme) => ({

	container: {
		backgroundColor: "Black",
		color: "white",
		height: "90vh",
		fontFamily: "'Bebas Neue', cursive",
		backgroundImage: `url(${PianoImage})`,
		backgroundSize:"125%",
		backgroundPosition:"center",
	},
	textWrapper:{
		padding:"2%",
		height: "60vh",
	}
}));

export default function SoundPage() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.textWrapper}>
				<h1>Too Many Options.</h1>

			</div>
		</div>
	);
}
