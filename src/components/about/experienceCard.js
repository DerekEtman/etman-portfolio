import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	experienceContainer: {
		maxWidth: "80%",
		margin:"0 auto",
        border:"none",
		boxShadow: "none",
		backgroundColor:"black",
		color:"white",
	},
	CardHeader: {
		fontFamily:"'Bebas Neue', cursive",
		fontSize:16,
	},
	CardHeader: {
		fontFamily: "'Bebas Neue', cursive",

	},
	

}));

export default function ExperienceCard(props) {
	const classes = useStyles();

	const { title, company, date, duty } = props;

	return (
		<>
			<Card className={classes.experienceContainer}>
				<CardHeader  title={title} subheader={company + " " + date} className={classes.CardHeader}/>
				<CardContent className={classes.cardInfo}>
					{duty.map((r) => {
						return <Typography variant="body2">• {r}</Typography>;
					})}
				</CardContent>
			</Card>
		</>
	);
}
