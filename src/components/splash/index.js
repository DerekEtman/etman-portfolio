import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import derek_leaning from "./images/Leaning_no_background_bw.png";
// import Box from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: "hidden",
		height: "auto",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	splash_image_wrapper: {
		// maxWidth:"500px",
		Width: "75%",
		overflow: "hidden",
		padding: "0 !important",
	},
	splash_image: {
		padding: "0",
		animation: " kenburns-top-left 30s ease-out both",
		"-webkit-animation": "kenburns-top-left 30s ease-out both",
	},
	splash_text: {
		padding: "5rem",
	},
	splashLanguages: {
		display: "flex",
		flexFlow:"row wrap",
		
	},
	stackSections: {
		padding: "0 2rem",
		margin: "0 auto",
	},

}));

export function MainSplash() {
	const classes = useStyles();

	return (
		<>
			<div className="MainSplashContainer">
				<Container maxWidth="xl" className="Splash_Container">
					<Grid container spacing={0}>
						<Grid item xs={12} sm={12} md={7} lg={7}>
							<h1 id="Splash_Hello">HELLO!</h1>
							<h3 id="Splash_Message"> I'M DEREK</h3>
							<h3 id="Splash_Message2"> HOW CAN I HELP?</h3>
							<Grid item l={12} className="splash_nav_container" justify="right">
								<Link href="/code" id="splash_nav" className="splash_link">
									CODE
								</Link>
								{/* <Link href="/sound" id="splash_nav" className="splash_link">
									AUDIO
								</Link> */}
								<Link href="/about" id="splash_nav" className="splash_link">
									ABOUT
								</Link>
							</Grid>
						</Grid>

						<Grid
							className={classes.splash_image_wrapper}
							id="splash_image_container"
							item
							xs={5}
						>
							<img className={classes.splash_image} alt="Derek Etman" src={derek_leaning} />
						</Grid>
					</Grid>
				</Container>

				<Container></Container>
			</div>
			<div className="splash_text_container">
				<Container maxWidth="xl">
					<Grid>
						<Paper elevation={3} className="splash_text">
							<h2>A Bit About Derek</h2>
							<p>
								Derek is a Full Stack Web Developer leveraging skills and talent
								learned while working in the media production industry. Strong passion
								for problem solving and delivering solutions to clients.
							</p>
							<h5> Current Stack Includes:</h5>
							<div className={classes.splashLanguages}>
								<div className={classes.stackSections}>
									<h5>Languages</h5>
									<li>JavaScript</li>
									<li>Python</li>
									<li>Java</li>
									<li>PostgreSQL</li>
								</div>

								<div className={classes.stackSections}>
									<h5>Frameworks</h5>
									<li>React</li>
									<li>Spring </li>
								</div>
								<div className={classes.stackSections}>
									<h5>Libraries</h5>
									<li>Redux</li>
									<li>Fabric.js</li>
									<li>D3.js</li>
									<li>Tone.js</li>
								</div>
							</div>

							<p>
								Skilled in all aspects of audio, digital photography, film production,
								and music composition. Strong professional with a bachelor's degree
								focused in music theory and composition from California Institute of the
								Arts.
							</p>
						</Paper>
					</Grid>
				</Container>
			</div>
		</>
	);
}
