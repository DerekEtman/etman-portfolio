import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	skillContainer: {
        // width: "8%",
        // height: "5%",
        boxShadow: "none",
        padding: ".2%",
		margin:"0 auto",
		maxWidth: "80%",		
		backgroundColor:"black",
		color:"white",
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
