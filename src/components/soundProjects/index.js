import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "Black",
		color: "white",
		height: "90vh",
    },
    textWrapper: {
        border:"12px dashed yellow",
    }
}));

export default function SoundPage() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.textWrapper}>
				<br />
				<h1> Under Construction </h1>
				<h2>Home page for all things audio</h2>
				<h2>~Coming soon~</h2>
				<br />
			</div>
		</div>
	);
}
