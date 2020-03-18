import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import derek_leaning from "./images/Leaning_no_background_bw.png";
// import Box from "@material-ui/system";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	splash_text: {
		padding: "5rem"
	}
}));

export function MainSplash() {
	const classes = useStyles();

	return (
		<>
			<div className="MainSplashContainer">
				<Container maxWidth="xl" className="Splash_Container">
					<Grid container spacing={3}>
						<Grid item xs={7}>
							<h1 id="Splash_Hello">HELLO!</h1>
							<h3 id="Splash_Message"> I'M DEREK</h3>
							<h3 id="Splash_Message2"> HOW CAN I HELP?</h3>
							<Grid item l={12} className="splash_nav_container" justify="right">
								<Link href="#" id="splash_nav">
									CODE
								</Link>
								<Link href="#" id="splash_nav">
									MUSIC
								</Link>
								<Link href="#" id="splash_nav">
									MORE
								</Link>
							</Grid>
						</Grid>

						<Grid item xs={5}>
							<img src={derek_leaning} />
						</Grid>
					</Grid>
				</Container>

				<Container></Container>
			</div>
			<div className="splash_text_container">
				<Container maxWidth="xl">
					<Grid>
						<Paper elevation={3} className="splash_text">
							<p>
								Experienced freelance with a demonstrated history of working in the
								media production industry. Skilled in all aspects of audio, digital
								photography, film production, and music composition. Strong professional
								with a bachelor's degree focused in music theory and composition from
								California Institute of the Arts.
							</p>
						</Paper>
					</Grid>
				</Container>
			</div>
		</>
	);
}
