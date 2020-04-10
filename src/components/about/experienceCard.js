import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	experienceContainer: {
        // width: "8%",
        border:"none",
		boxShadow: "none",
	},
}));

export default function ExperienceCard(props) {
	const classes = useStyles();

	const { title, company, date, duty } = props;

	return (
		<>
			<Card className={classes.experienceContainer}>
				<CardHeader title={title} subheader={company + " " + date} />
				<CardContent>
					{duty.map((r) => {
						return <Typography>• {r}</Typography>;
					})}
				</CardContent>
			</Card>
		</>
	);
}
