import React from "react";

import Paper from "@material-ui/core/Paper";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

import { resumeData } from "./resumeData";
import SkillCard from "./skillCard";
import ExperienceCard from "./experienceCard";
import EducationCard from "./educationCard";

import {
	Typography,
	Card,
	makeStyles,
	CardContent,
	Grid,
	Link,
	Icon,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) =>
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor:"black",

	},
	resumeContact: {
		border: "none",
		padding: "1%",
		backgroundColor:"black",
		color:"white",

	},
	skillsSection: {
		// border: "1px solid green",
		border: "none",
		// display: "flex",
		// flexDirection: "column",
		paddingTop: "1%",
		boxShadow: "none",
		backgroundColor:"black",
		color:"white",
	},
	experienceSection: {
		paddingTop: "1%",
		border: "none",
		boxShadow: "none",
		backgroundColor:"black",
		color:"white",
	},
	educationSection: {
		paddingTop: "1%",
		border: "none",
		boxShadow: "none",
		backgroundColor:"black",
		color:"white",
	},
	resumeSkills: {
		border: "none",
		boxShadow: "none",
		backgroundColor:"black",
		color:"white",
	},
	contactInfo: {
		width: "100%",
		margin: "0 auto",
		justifyContent: "center",
		backgroundColor:"black",
		color:"white",
	},
	contactAddresses: {
		// padding: "2%",
		margin: "2%",
		fontSize: 14,
		color:"white",
	},
	resumeName: {
		fontFamily:"'Bebas Neue', cursive",
		fontSize:72,
	},
	resumeSectionTitles: {
		fontFamily:"'Bebas Neue', cursive",
		fontSize:46,
	},
	contactText:{
		color:"white",

	}
}));

export default function ResumeBuilder() {
	const classes = useStyles();
	const { contact, experience, skills, education } = resumeData;

	return (
		<Paper className={classes.root}>
			<Card className={classes.resumeContact} variant="outlined">
				<Typography variant="h2" className={classes.resumeName}>{contact.name}</Typography>

				<Grid container spacing={0} className={classes.contactInfo}>
					<Typography className={classes.contactAddresses}>
						<Link className={classes.contactText}>
							<MailOutlineIcon /> {contact.email}
						</Link>
					</Typography>

					<Typography className={classes.contactAddresses}>
						<Link href={contact.linkedIn} className={classes.contactText}>
							<LinkedInIcon /> {contact.linkedIn}
						</Link>
					</Typography>

					<Typography className={classes.contactAddresses}>
						
						<Link href={contact.personalWebsite} className={classes.contactText}> <WebIcon /> {contact.personalWebsite}</Link>
					</Typography>

					<Typography className={classes.contactAddresses}>
						<Link href={contact.gitHub} className={classes.contactText}>
							<GitHubIcon /> {contact.gitHub}
						</Link>
					</Typography>
				</Grid>
			</Card>

			<Card className={classes.skillsSection}>
				<Typography variant="h3 " className={classes.resumeSectionTitles}>Skills</Typography>

				<CardContent className={classes.resumeSkills}>
					<Grid container spacing={0}>
						{skills.coding.map((skill) => {
							return <SkillCard codingSkill={skill} />;
						})}
					</Grid>
				</CardContent>
			</Card>

			<Card className={classes.experienceSection}>
				<Typography variant="h3" className={classes.resumeSectionTitles}>Experience</Typography>
				{experience.map((experience) => {
					return (
						<ExperienceCard
							title={experience.jobTitle}
							company={experience.companyName}
							date={experience.employmentDate}
							duty={experience.duties}
						/>
					);
				})}
			</Card>

			<Card className={classes.educationSection}>
				<Typography variant="h3" className={classes.resumeSectionTitles}>Education</Typography>

				{education.map((education) => {
					return (
						<EducationCard
							schoolName={education.schoolName}
							program={education.programTitle}
							date={education.enrollmentDate}
							info={education.infoAboutProgram}
						/>
					);
				})}
			</Card>
		</Paper>
	);
}
