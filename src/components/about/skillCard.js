import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	skillContainer: {
		width: "8%",
		boxShadow: "none",
	},
}));

export default function SkillCard(skill) {
	const classes = useStyles();

	console.log(skill);
	return (
		<Card className={classes.skillContainer}>
			<CardContent>
				<Typography>{skill.codingSkill}</Typography>
			</CardContent>
		</Card>
	);
}
