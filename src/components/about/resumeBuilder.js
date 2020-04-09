import React from "react";

import Paper from "@material-ui/core/Paper";

import { resumeData } from "./resumeData";
import SkillCard from "./skillCard";
import ExperienceCard from "./experienceCard";
import EducationCard from "./educationCard";

import { Typography, Card, makeStyles, CardContent } from "@material-ui/core";

// const useStyles = makeStyles((theme) =>
const useStyles = makeStyles((theme) => ({
	root: {},
	resumeContact: {
		width: "50%",
		margin: "0 auto",
        border: "none",
        padding:"1%",
        borderRadius:"0"
    },
    skillsSection:{
        border:"1px solid green",
        display:"flex",
        flexDirection:"column",
        paddingTop:"1%",
        



    },
	resumeSkills: {
        border: "1px solid red",
        flexDirection:"row",
    },
    experienceSection: {
        paddingTop:"1%",

    },
    educationSection:{
        paddingTop:"1%",
    }
}));

export default function ResumeBuilder() {
	const classes = useStyles();
	const { contact, experience, skills, education } = resumeData;

	return (
		<Paper>
			<Card className={classes.resumeContact} variant="outlined">
				<Typography variant="h2">{contact.name}</Typography>
				<Typography>{contact.phone}</Typography>
				<Typography>{contact.email}</Typography>
				<Typography>{contact.linkedIn}</Typography>
				<Typography>{contact.personalWebsite}</Typography>
				<Typography>{contact.gitHub}</Typography>
			</Card>

			<Card variant="outlined" className={classes.skillsSection}>
					<Typography variant="h3">Skills</Typography>

				<CardContent className={classes.resumeSkills}>
					{skills.coding.map((skill) => {
						return <SkillCard codingSkill={skill} />;
					})}
				</CardContent>
			</Card>

			<Card variant="outlined" className={classes.experienceSection}>
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
			<Card variant="outlined" className={classes.educationSection}>
				<Typography variant="h3">Education</Typography>

				{education.map((education) => {
					return (
						<EducationCard
							schoolname={education.schoolName}
							program={education.programTitle}
							enrollmentDate={education.enrollmentDate}
							info={education.infoAboutProgram}
						/>
					);
				})}
			</Card>
		</Paper>
	);
}
