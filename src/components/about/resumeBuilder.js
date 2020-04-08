import React from "react";

import Paper from "@material-ui/core/Paper";

import { resumeData } from "./resumeData";
import SkillCard from "./skillCard";
import ExperienceCard from "./experienceCard";
import EducationCard from "./educationCard";

import { Typography, Card, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) =>
const useStyles = makeStyles((theme) => ({
	root: {},
	resumeContact: {
		width: "50%",
		margin: "0 auto",
		border: "none",
    },
    resumeSkills:{
        border:"1px solid red",
        
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
			<Card variant="outlined" className={classes.resumeSkills}>
				<Typography variant="h3">Skills</Typography>

				{skills.coding.map((skill) => {
                    return(
                        <SkillCard codingSkill={skill}/>
                    )
                })}
			</Card>
			<Card variant="outlined">
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
			<Card variant="outlined">
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
