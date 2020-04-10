import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	skillContainer: {
        // width: "8%",
        // height: "5%",
        boxShadow: "none",
        padding: ".2%",
		margin:"0 auto",
		maxWidth: "80%",		
	},
	singleSkill:{
		// fontFamily:"'Bebas Neue', cursive",
		fontSize:16,
	}
}));

export default function SkillCard(skill) {
    const classes = useStyles();
    
	return (
		<Card className={classes.skillContainer}>
			<CardContent>
				<Typography className={classes.singleSkill}>{skill.codingSkill}</Typography>
			</CardContent>
		</Card>
	);
}
