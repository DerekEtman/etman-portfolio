import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from "./projectCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import insuline_img from "./assets/Insuline_1.png";
import saferoutes_img from "./assets/SafeRoutes_1.png"
import saltines_img from "./assets/Saltines_1.png"
import droom_img from "./assets/Droom_1.png"
import memefly_img from "./assets/Memefly_1.png"

const testData = [
	{
		id: 0,
		thumb_nail:memefly_img,
		name: "MemeFlyAi",
		project_info:
			`• Collaborated with a Data Science team to create a website for a Neural Network Meme generator\n\n• Worked on a team of six developers to create a fully authenticated online image text editor, backed by MongoDB, with a React and FabricJS frontend\n• Handled delegation of tasks and breakdown of product releases over a 2+ month period.`,
		project_url: "https://www.memeflyai.com/",
		git_repo: "https://github.com/Lambda-School-Labs/memefly-fe.git"
	},	{
		id: 1,
		thumb_nail:saferoutes_img,
		name: "SafeRoutes",
		project_info:
			"• Collaborated with a Data Science team to create a website that compiled and displayed the most dangerous intersections in Los Angeles.• Built and deployed a Java application using Spring framework API following the REST architectural pattern with OAuth2 authentication.• Migrated from H2 to PostGres using a seeding script to generate default data.• Created user docs with swagger.• Ensured stable code using JUnit to write unit tests.",
		project_url:"https://front-end.pedroprieto.now.sh/",
		git_repo: "https://github.com/Safe-Routes-Finders/Back-End"
	},	{
		id: 2,
		thumb_nail:insuline_img,
		name: "Insuline",
		project_info:
			"• Collaborated with a Data Science team to create a blood glucose predictor for diabetics.			• Represented the front end web team that consisted of two Senior. Developers in daily meetings.			• Designed website and logo, mocked out and helped to implement the UX/UI of the application.			• Helped build React website with oAuth2 authentication, using Formik to create login and registration forms.			• Ensured routes were properly installed to show top level pages as well as nested views.			• Proposed and built out food nutrition finder based on USFDA nutrition API..",
		project_url: "https://insuline.netlify.com/",
		git_repo: "https://github.com/Build-Week-Diabetes-Manager"
	},	{
		id: 3,
		thumb_nail: saltines_img,
		name: "Saltines - A Hacker News, Saltiest Message Ranker",
		project_info:
			"• Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.• Designed website and graphics, mocked out full UX and UI of the application.• Worked with a team of three junior front end engineers to build a React front end, using Redux for global state management, and the new React Hooks API.• Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.• Designed website and graphics, mocked out full UX and UI of the application.• Worked with a team of three junior front end engineers to build a React front end, using Redux for global state management, and the new React Hooks API.• Established deployment schedule for project and took lead of all junior front end engineers; delegated tasks, handled team disputes, pair programmed to help overcome blockers.• Established deployment schedule for project and took lead of all junior front end engineers; delegated tasks, handled team disputes, pair programmed to help overcome blockers.",
		project_url: "https://saltines.now.sh/",
		git_repo: "https://github.com/saltiest-hacker-news-comments/FE-work"
	},	{
		id: 4,
		thumb_nail:droom_img,
		name: "Droom",
		project_info:
			"• Designed marketing website and logo for job search website.• Used less and flex box to create animations.• Laid out fully responsive website for desktop, tablet, and mobile use.",
		project_url: "https://droom2019.netlify.com/",
		git_repo: "https://github.com/build-week-droom/Droom-UI"
	},
];

const styles = makeStyles({
	root: {
		backgroundColor:"grey",

	},

	media_container: {
		width:"90%",
		height:"100%",
		margin:"0 auto",
		flexGrow:"1",
		border:"1px solid red"
	},
	code_home_header: {
		// backgroundColor:"yellow",
		font:"white",
		height:"100",
		margin:"1rem auto",
	},
	code_header: {
		border:"1px solid yellow"
	},

});


export default function codePage() {
	const classes = styles();

	return (
		<div className={classes.root}>
		<Container maxWidth="LG">
			<div className={classes.code_home_header}>
				<h1 className={classes.code_header}>Code Home Gallery</h1>
			</div>

			<div className={classes.media_container}>
				<Grid container spacing={2}   direction="row" justify="center" alignItems="center">
					<Grid item lg={12} xs={6} sm={3} container="true">
						{testData.map(project => {
							return (
								<ProjectCard
									key={project.id}
									image_url={project.thumb_nail}
									name={project.name}
									info={project.project_info}
									url={project.project_url}
									git_url={project.git_repo}
								/>
							);
						})}
					</Grid>
				</Grid>
			</div>
		</Container>
		</div>
	);
}
