import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./projectCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import insuline_img from "./assets/Insuline_1.png";
import saferoutes_img from "./assets/SafeRoutes_1.png";
import saltines_img from "./assets/Saltines_1.png";
import droom_img from "./assets/Droom_1.png";
import memefly_img from "./assets/Memefly_1.png";
import dont_die_img from "./assets/dont_Die_1.png";
import ncov_19 from "./assets/ncov19_thumbnail_2.png";
import { code_pic } from "./assets/code_pic.jpg";

const largeProjectData = [
	{
		id: 0,
		thumb_nail: memefly_img,
		name: "MemeFlyAi",
		project_brief:
			"Collaborated with a Data Science team to create a website for a Neural Network Meme generator.",
		project_info: [
			"• Collaborated with a Data Science team to create a website for a Neural Network Meme generator.",
			"• Worked on a team of six developers to create a fully authenticated online image text editor, backed by MongoDB, with a React and FabricJS frontend.",
			"• Handled delegation of tasks and breakdown of product releases over a 2+ month period.",
		],
		tech_stack: [],
		project_url: "https://memeflyreboot.netlify.app",
		git_repo: "https://github.com/Lambda-School-Labs/memefly-fe.git",
	},
	{
		id: 1,
		thumb_nail: saferoutes_img,
		name: "SafeRoutes",
		project_brief:
			"Collaborated with a Data Science team to create a website that compiled and displayed the most dangerous intersections in Los Angeles.",
		project_info: [
			"• Collaborated with a Data Science team to create a website that compiled and displayed the most dangerous intersections in Los Angeles.",
			"• Built and deployed a Java application using Spring framework API following the REST architectural pattern with OAuth2 authentication.",
			"• Migrated from H2 to PostGres using a seeding script to generate default data.",
			"• Created user docs with swagger.",
			"• Ensured stable code using JUnit to write unit tests.",
		],
		tech_stack: [],
		project_url: "https://front-end.pedroprieto.now.sh/",
		git_repo: "https://github.com/Safe-Routes-Finders/Back-End",
	},
	{
		id: 2,
		thumb_nail: insuline_img,
		name: "Insuline",
		project_brief:
			"Collaborated with a Data Science team to create a blood glucose predictor for diabetics.",
		project_info: [
			"• Collaborated with a Data Science team to create a blood glucose predictor for diabetics.",
			"• Represented the front end web team that consisted of two Senior. Developers in daily meetings.",
			"• Designed website and logo, mocked out and helped to implement the UX/UI of the application.",
			"• Helped build React website with oAuth2 authentication, using Formik to create login and registration forms.",
			"• Ensured routes were properly installed to show top level pages as well as nested views.",
			"• Proposed and built out food nutrition finder based on USFDA nutrition API.",
		],
		tech_stack: [],
		project_url: "https://insuline-diabetes.netlify.app/",
		git_repo: "https://github.com/Build-Week-Diabetes-Manager",
	},
	{
		id: 3,
		thumb_nail: saltines_img,
		name: "Saltines - A Hacker News, Saltiest Message Ranker",
		project_brief:
			"Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.",
		project_info: [
			"• Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.",
			"• Designed website and graphics, mocked out full UX and UI of the application.• Worked with a team of three junior front end engineers to build a React front end, using Redux for global state management, and the new React Hooks API.",
			"• Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.",
			"• Designed website and graphics, mocked out full UX and UI of the application.",
			"• Worked with a team of three junior front end engineers to build a React front end, using Redux for global state management, and the new React Hooks API.",
			"• Established deployment schedule for project and took lead of all junior front end engineers; delegated tasks, handled team disputes, pair programmed to help overcome blockers.",
			"• Established deployment schedule for project and took lead of all junior front end engineers; delegated tasks, handled team disputes, pair programmed to help overcome blockers.",
		],
		tech_stack: [],
		project_url: "https://saltines.now.sh/",
		git_repo: "https://github.com/saltiest-hacker-news-comments/FE-work",
	},
	{
		id: 4,
		thumb_nail: droom_img,
		name: "Droom",
		project_brief: "Designed marketing website and logo for job search website.",
		project_info: [
			"• Designed marketing website and logo for job search website.",
			"• Used less and flex box to create animations.",
			"• Laid out fully responsive website for desktop, tablet, and mobile use.",
		],
		tech_stack: [],
		project_url: "https://droom2019.netlify.com/",
		git_repo: "https://github.com/build-week-droom/Droom-UI",
	},
	{
		id: 5,
		thumb_nail: dont_die_img,
		name: "Dont Die - The Game",
		project_brief:
			"Build an interactive Multi-User Dungeon (MUD) client and server",
		project_info: [
			"• Designed Website, character, and game map.",
			"• Learned and deployed server using Django Framework.",
			"•Connected server to Dont Die Client",
		],
		tech_stack: [],
		project_url: "https://droom2019.netlify.com/",
		git_repo: "https://github.com/build-week-droom/Droom-UI",
	},
	{
		id: 5,
		thumb_nail: ncov_19,
		name: "Ncov19.us",
		project_brief:
			"Real time Covid-19 dashboard, With mapped country, state, and county data. As well as drive through testing locations.",
		project_info: [
			"• Worked with a team of 30 + web devs and data engineers to build one location for US based covid 19 information.",
			"• Worked with UX to style dashboard in accordance with Figma design.",
		],
		tech_stack: ["python", "react", "dash bootstrap", ],
		project_url: "http://ncov19.us",
		git_repo: "https://github.com/ncov19-us/front-end",
	}
];

const dayProjectData = [
	{
		id: 0,
		thumb_nail: memefly_img,
		name: "Daily Project",
		project_brief: "-Quick Brief about daily project.",
		project_info: ["Fill in points"],
		tech_stack: [],
		project_url: "https://www.memeflyai.com/",
		git_repo: "https://github.com/Lambda-School-Labs/memefly-fe.git",
	},
];

const styles = makeStyles({
	root: {},
	media_container: {
		width: "90%",
		height: "100%",
		margin: "0 auto",
		fontFamily:"'Bebas Neue', cursive",
	},
	code_home_header: {
		// backgroundColor:"yellow",
		height: "100",
		margin: "1rem auto",
		fontFamily:"'Bebas Neue', cursive",

	},
	code_header: {
		fontSize:"3.5rem",
		fontFamily:"'Bebas Neue', cursive",
	},
	large_project_header:{
		display:"flex",
		flexDirection:"flex-start",
		fontFamily:"'Bebas Neue', cursive",
		fontSize:"3rem",
		borderBottom:"4px solid black",


	}
});

export default function codePage() {
	const classes = styles();

	return (
		<div className={classes.root}>
			<Container maxWidth="LG">
				<Typography className={classes.code_home_header}>
					<h1 className={classes.code_header} alt="Code Project HomePage">
						CODE PROJECTS
					</h1>
				</Typography>
				<div className={classes.media_container}>
					<Typography className={classes.large_project_header}>
						<h3 style={{margin:"0"}}>LARGE PROJECTS</h3>
					</Typography>
					<Grid
						container
						spacing={2}
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} container="true">
							{largeProjectData.map((project) => {
								return (
									<ProjectCard
										key={project.id}
										image_url={project.thumb_nail}
										name={project.name}
										brief={project.project_brief}
										info={project.project_info}
										url={project.project_url}
										git_url={project.git_repo}
									/>
								);
							})}
						</Grid>
					</Grid>
				</div>

				{/* <div className={classes.media_container}>
					<Typography>
						<h1>DAY PROJECTS</h1>
					</Typography>
					<Grid
						container
						spacing={2}
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={12} container="true">
							{dayProjectData.map((project) => {
								return (
									<ProjectCard
										key={project.id}
										image_url={project.thumb_nail}
										name={project.name}
										brief={project.project_brief}
										info={project.project_info}
										url={project.project_url}
										git_url={project.git_repo}
									/>
								);
							})}
						</Grid>
					</Grid>
				</div> */}
			</Container>
		</div>
	);
}
