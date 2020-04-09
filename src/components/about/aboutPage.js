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

const resumeData = {
	contact: {
		name: "Derek Etman",
		phone: "805 428 2682",
		email: "Dereketman@gmail.com",
		linkedIn: "https://linkedin.com/in/DerekEtman",
		personalWebsite: "http://Www.DerekEtman.com",
		gitHub: "https://github.com/DerekEtman",
	},
	skills: {
		coding: [
			"JavaScript",
			"CSS",
			" HTML 5",
			"React",
			"Redux",
			"Python",
			"Java",
			"Spring",
			"Jest",
			"Maven",
			"Tomcat",
			"GraphQL",
			"GIT",
		],
	},
	experience: [
		{
			jobTitle: "Media Specialist",
			companyName: "Chair Productions",
			employmentDate: " 2012 - Present",
			duties: [
				"Collaborated with multiple clients for over six years on various projects, which enhanced their recognition as an artist and speaker.",
				"Designed and created layouts for websites, tailored to the artist’s aesthetics.",
				"Increased artist's international seminars and lectures, based on the content created and developed, i.e. photos, graphics, presentation, and still being used.",
				"Edited and curated videos used to successfully showcase water for a non-profit initiative.",
				" Organized international project media to ensure future use: e.g. naming conventions, hierarchy, print ready, and easy layout.",
			],
		},
		{
			jobTitle: "Production Assistant",
			companyName: "Freelance",
			employmentDate: "Feb 2018 - Present",
			duties: [
				"Managed technical and administrative tasks, from running errands to distributing scripts, coordinating craft services and assisting with lighting and sound for studio and on-location shoots.",
				"Earned repeated praise from management and clients (including BaM Productions, Los York, Nike and Victoria Secret) for anticipating needs of executives, prioritizing tasks and ensuring successful execution of all productions.",
				"Relied on by directors, producers, set designers and stylists to source and locate obscure items, props and specialty talent for commercial shoots.",
			],
		},
		{
			jobTitle: "Media Creator and Developer",
			companyName: "The White Dress Play",
			employmentDate: "June 2017 - October 2017",
			duties: [
				"Developed and maintained “The White Dress” play website at an effective cost and turned around the request promptly.",
				"Arranged and scheduled photo-shoots that ran smoothly; quickly resolved ad hoc issues with technical, talent, and schedules.",
				"Proactively Created and designed layouts for web and print media within tight deadlines to ensure that the customers meet their timelines.",
			],
		},
		{
			jobTitle: "Head of Sound & Music, Founding Partner",
			companyName: "Model 05 Productions",
			employmentDate: "May 2015 - April 2017",
			duties: [
				"Managed 15-plus projects from client idea to designed and executed finished projects, shows, and/or commercials which extended from a month to up to a year.",
				"Clients appreciated resourcefulness and timely delivery due to design, style, and creative approaches.",
				"Sole company resource for directing sound, music, and ADR on all projects.",
				"Researched and contracted external support when required.",
				"Created system to effectively manage 25 terabytes, of customer content, to quickly retrieve relevant information and maintain quality / integrity of files.",
				"Researched and approved all required project equipment purchases, remaining within budget.",
			],
		},
		{
			jobTitle: "Assistant Recording Engineer",
			companyName: "SoundMind Industries",
			employmentDate: "August 2011 - January 2014",
			duties: [
				"Voluntary 6-month internship based on professor’s recommendation, promoted to full team member: focused on recorded Automated Dialog Replacement (ADR), instruments, and vocals set-up.",
				"Independently and effectively managed audio files for mixed tracks, vocals, and sound effects based on self-study of various manuals and resource material.",
				"lients valued properly set-up equipment, anticipated their needs, and fully stocked and prepped studio for their recording sessions.",
				"Enhanced audio quality via manual editing and cleaning techniques, following lead requirements (no software available).",
			],
		},
		{
			jobTitle: "Composer/ Assistant Recording Engineer",
			companyName: "Global Media Entertainment Group, LLC",
			employmentDate: "August 2011 - May 2013",
			duties: [
				"Used and learned technology platform related to my interest in audio and music.",
				"Applied design aesthetic by creating company logo and hospitality catalog.",
				"Independently and effectively completed many team assigned scheduling, reporting, and ad hoc tasks.",
			],
		},
		{
			jobTitle: "Senior Intern",
			companyName: "Global Media Entertainment Group, LLC",
			employmentDate: "August 2011 - January 2014",
			duties: [
				"Used and learned technology platform related to my interest in audio and music.",
				"Applied design aesthetic by creating company logo and hospitality catalog.",
				"Independently and effectively completed many team assigned scheduling, reporting, and ad hoc tasks.",
			],
		},
	],
	education: [
		{
			schoolName: "Lambda School",
			programTitle: "Full Stack Developer",
			enrollmentDate: "2019-2020",
			infoAboutProgram: [
				"Training in all of the following: React, React Native, Redux, Java, Spring, Maven, Swagger, Jest, PostGresSQL , SQL, Python, and more.",
				"Utilized agile software development and Git workflow on all projects ( daily projects as well as large monthly group projects during Lambda buildweek)",
				"Hands-on experiences with server and client testing.",
				"Wrote production-ready code using ReactJS, Redux, CSS for frontend and Java Spring for backend to build single page applications.",
			],
		},
		{
			schoolName: "California Institute of the Arts",
			programTitle: "Bachelor's Degree, Music Theory and Composition",
			enrollmentDate: "2013 - 2016",
			infoAboutProgram: [
				"Students proceed from foundation studies in composition, experimental sound practices, theory, technology and professional development, and go on to create a portfolio of original work—all the while cultivating their own distinctive artistic profiles. All BFA candidates in Composition and Experimental Sound Practices studies are required to pass a Graduation Portfolio Review in order to obtain the BFA degree.",
				"Composition for Film and Video affords a technical and aesthetic foundation for students who wish to collaborate with film and video artists.",
			],
		},
		{
			schoolName: "Ventura College",
			programTitle: "Full Stack Developer",
			enrollmentDate: "A.A. Music Theory and Composition",
			infoAboutProgram: [""],
		},
		{
			schoolName: "Ventura College",
			programTitle: "Full Stack Developer",
			enrollmentDate: "A.A. Liberal Arts and Sciences, General Studies and Humanities",
			infoAboutProgram: [""],
		},
	],
};

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
				<Tab label="About Derek" {...a11yProps(0)} />
				<Tab label="Resume" {...a11yProps(1)} />
			</Tabs>

			{/* First Tab - About Me */}
			<TabPanel value={value} index={0} className={classes.aboutMeTab}>
				{/* <Container className={classes.aboutMeTab}> */}
				<Paper elevation={2}>
					<Typography>
						Hello
						{/* <img src={derek} /> */}
					</Typography>
				</Paper>
				{/* </Container> */}
			</TabPanel>

			{/* Second Tab - Resume */}
			<TabPanel value={value} index={1} className={classes.resumeTab}>
        {resumeBuilder}
			</TabPanel>
		</div>
	);
}
