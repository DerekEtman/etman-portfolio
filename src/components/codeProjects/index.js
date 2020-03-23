import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from "./projectCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const testData = [
	{
		id: 0,
		thumb_nail:"https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg",
		name: "MemeFlyAi",
		project_info:
			`• Collaborated with a Data Science team to create a website for a Neural Network Meme generator\n• Worked on a team of six developers to create a fully authenticated online image text editor, backed by MongoDB, with a React and FabricJS frontend\n• Handled delegation of tasks and breakdown of product releases over a 2+ month period.`,
		project_url: "https://www.memeflyai.com/",
		git_repo: "https://github.com/Lambda-School-Labs/memefly-fe.git"
	},	{
		id: 1,
		thumb_nail:"https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg",
		name: "SafeRoutes",
		project_info:
			"• Collaborated with a Data Science team to create a website that compiled and displayed the most dangerous intersections in Los Angeles.• Built and deployed a Java application using Spring framework API following the REST architectural pattern with OAuth2 authentication.• Migrated from H2 to PostGres using a seeding script to generate default data.• Created user docs with swagger.• Ensured stable code using JUnit to write unit tests.",
		project_url:"https://front-end.pedroprieto.now.sh/",
		git_repo: "www.gitrepo.com"
	},	{
		id: 2,
		thumb_nail:"https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg",
		name: "test",
		project_info:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		project_url: "www.testUrl.com",
		git_repo: "www.gitrepo.com"
	},	{
		id: 3,
		thumb_nail:"https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg",
		name: "test",
		project_info:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		project_url: "www.testUrl.com",
		git_repo: "www.gitrepo.com"
	},	{
		id: 4,
		thumb_nail:"https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg",
		name: "test",
		project_info:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		project_url: "www.testUrl.com",
		git_repo: "www.gitrepo.com"
	},
];

const styles = makeStyles({
	media_container: {
		width:"90%",
		height:"100%",
		margin:"0 auto",
		// border:"1px solid red"
	},
	code_home_header: {
		// backgroundColor:"yellow",
		font:"white",
		height:"100",
		margin:"1rem auto"
	}

});


export default function codePage() {
	const classes = styles();

	return (
		<div className="code_home">
		<Container maxWidth="LG">
			<div className={classes.code_home_header}>
				<h1>Code Home Gallery</h1>
			</div>

			<div className={classes.media_container}>
				<Grid container spacing={1} xl={12} >
					<Grid item xs={"auto"} container="true">
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
