import React from "react";

import Paper from "@material-ui/core/Paper";

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
} from "@material-ui/core";

// const useStyles = makeStyles((theme) =>
const useStyles = makeStyles((theme) => ({
	root: {},
	resumeContact: {
		width: "50%",
		margin: "0 auto",
		border: "none",
		padding: "1%",
		borderRadius: "0",
	},
	skillsSection: {
        // border: "1px solid green",
        border:"none",
		// display: "flex",
		// flexDirection: "column",
        paddingTop: "1%",
        boxShadow:"none",

	},
    experienceSection: {
        paddingTop: "1%",
        border:"none",
        boxShadow:"none",

    },
    educationSection: {
        paddingTop: "1%",
        border:"none",
        boxShadow:"none",
    },
	resumeSkills: {
        border:"none",
        boxShadow:"none",
		// border: "1px solid red",
		// flexDirection: "row",
	},
}));

export default function ResumeBuilder() {
	const classes = useStyles();
	const { contact, experience, skills, education } = resumeData;

	return (
		<Paper >
			<Card className={classes.resumeContact} variant="outlined">
				<Typography variant="h2">{contact.name}</Typography>
				<CardContent>
					{/* <Typography>{contact.phone}</Typography> */}
					<Typography>{contact.email}</Typography>
					<Typography>{contact.linkedIn}</Typography>
					<Typography>{contact.personalWebsite}</Typography>
					<Typography>{contact.gitHub}</Typography>
				</CardContent>
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

			<Card  className={classes.educationSection}>
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
