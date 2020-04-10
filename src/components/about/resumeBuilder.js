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

		
	},
	resumeContact: {
		border: "none",
		padding: "1%",
	},
	skillsSection: {
		// border: "1px solid green",
		border: "none",
		// display: "flex",
		// flexDirection: "column",
		paddingTop: "1%",
		boxShadow: "none",

	},
	experienceSection: {
		paddingTop: "1%",
		border: "none",
		boxShadow: "none",

	},
	educationSection: {
		paddingTop: "1%",
		border: "none",
		boxShadow: "none",

	},
	resumeSkills: {
		border: "none",
		boxShadow: "none",
		// border: "1px solid red",
		// flexDirection: "row",
	},
	contactInfo: {
		width: "100%",
	},
	contactAddresses: {
		padding: "2%",
	},
}));

export default function ResumeBuilder() {
	const classes = useStyles();
	const { contact, experience, skills, education } = resumeData;

	return (
		<Paper className={classes.root}>
			<Card className={classes.resumeContact} variant="outlined">
				<Typography variant="h2">{contact.name}</Typography>
				{/* <Typography>{contact.phone}</Typography> */}
				{/* <Typography className={classes.contactAddresses}>{contact.email}</Typography>
					<Typography component={Link} src={contact.linkedIn} >{contact.linkedIn}</Typography>
					<Typography component={Link} href={contact.personalWebsite}>{contact.personalWebsite}</Typography>
					<Typography component={Link} href={contact.gitHub}>{contact.gitHub}</Typography> */}
				<Grid container spacing={0} className={classes.contactInfo}>
					<Typography className={classes.contactAddresses}>
						<MailOutlineIcon /> <Link>{contact.email}</Link>
					</Typography>

					<Typography className={classes.contactAddresses}>
						<LinkedInIcon /> <Link href={contact.linkedIn}>{contact.linkedIn}</Link>
					</Typography>

					<Typography className={classes.contactAddresses}>
						<WebIcon />{" "}
						<Link href={contact.personalWebsite}>{contact.personalWebsite}</Link>
					</Typography>

					<Typography className={classes.contactAddresses}>
						<GitHubIcon /> <Link href={contact.gitHub}>{contact.gitHub}</Link>
					</Typography>
				</Grid>
			</Card>

			<Card className={classes.skillsSection}>
				<Typography variant="h3">Skills</Typography>

				<CardContent className={classes.resumeSkills}>
					<Grid container spacing={0}>
						{skills.coding.map((skill) => {
							return <SkillCard codingSkill={skill} />;
						})}
					</Grid>
				</CardContent>
			</Card>

			<Card className={classes.experienceSection}>
				<Typography variant="h3">Experience</Typography>
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
				<Typography variant="h3">Education</Typography>

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
