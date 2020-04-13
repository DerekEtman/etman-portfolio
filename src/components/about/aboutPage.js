import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import derek from "../splash/images/derek_leaning_no_background.png";
import Paper from "@material-ui/core/Paper";

import resumeBuilder from "./resumeBuilder";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: "flex",
		backgroundColor: "black",
		color: "white",
		margin: "0 auto",
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	aboutMeTab: {
		margin: "0 auto",
		width: "100%",
		minHeight: "92vh",
	},
	resumeTab: {
		// border: "1px solid yellow",
		margin: "0 auto",
		width: "100%",
		// height: "90vh",
	},
	tabs: {},
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab className={classes.tabs} label="About Derek" {...a11yProps(0)} />
				<Tab className={classes.tabs} label="Resume" {...a11yProps(1)} />
			</Tabs>

			{/* First Tab - About Me */}
			<TabPanel value={value} index={0} className={classes.aboutMeTab}>
				<Paper>
					<Typography variant="h3">This is me.</Typography>
					<Typography>
						As crucial as it is, the ability to create music is not enough today;
						while I might not have been aware then, everything I've done as a musician
						and composer has reinforced and aided in my pursuit of being a web
						developer.
					</Typography>
					<Typography>
						I could make this really long-winded but as web developers and music
						professionals we both know that we have lots to do and very little time to
						do them. Here’s a really quick breakdown, if you want more details you can
						read past that: -Collector and player of multiple instruments -Hundreds of
						hours of recording, mixing, and editing -Tech-savvy, builds own computers,
						problem solver - Obsessed with sound quality - Workaholic - Many Sleepless
						nights - Quick at learning and adapting - Switched to web development
					</Typography>
					<Typography>
						Playing piano from a young age led me to compose music, collect, and
						playing multiple instruments, I recently picked up a tremoloa and a
						marxophone. Very fun instruments from the 20s and 30s
					</Typography>
					<Typography>
						Interning at recording studios has led to hundreds of hours of recording
						and mixing, reading manuals for each piece of equipment, the endless quest
						for producing better sounds, and the awesome ability of getting coffee.
						<br />
						Dialogue editing jobs have led to perfectionism and experience of having a
						clean and structured file structure.
						<br />
						The lack of good instrumentalists around me got me interested in VSTs and
						programming. Which meant I needed stronger computers and more efficient
						workflows to utilize them well. This meant building stronger, faster,
						cheaper workstations led me down the road of building my own computers.
						<br />
						I graduated from The California Institute of the Arts with a B.A. in Music
						Composition with a certificate in composition in Film and Video. While
						studying there I worked with many students on their respective projects;
						writing music for their animation, creating a soundscape for a theater
						piece, mixing the audio on their film project.
						<br />
						On the surface, the art industry and the tech industry seem worlds apart.
						When you dig deeper, the development and flow are completely the same.
						<br />
						The most important role you have is to understand your
						client/director/product manager, establishing a solid rapport and easy
						communication. If they ask for the color blue, it’s important to find out
						what blue they’re envisioning; they might have imagined purple instead. If
						expectations are unrealistic, it’s up to you to find a compromise that
						works in their favor. The amount of problem-solving and creativity are on
						the same level but achieved using different tools.
						<br />
						This is why I felt comfortable switching between coding and music, I
						really enjoy the learning process and problems facing you while coding.
						Plus you can listen to music while coding (You can’t really listen to
						music while working with audio…)
						<br />
						Since I love learning and there are so many experiences to be had with
						coding, I’ll be here a while.
					</Typography>
				</Paper>
			</TabPanel>

			{/* Second Tab - Resume */}
			<TabPanel value={value} index={1} className={classes.resumeTab}>
				{resumeBuilder}
			</TabPanel>
		</div>
	);
}
