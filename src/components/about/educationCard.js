import React from "react";
import { Card, CardHeader, Typography, CardContent, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    educationalContainer: {
        border:"none",
        boxShadow:"none",

    }

}));

export default function EducationalCard(props) {
    const classes = useStyles();
	const { schoolName, program, date, info } = props;

	return (
		<>
			<Card className={classes.educationalContainer}>
				<CardHeader title={schoolName} subheader={program} />
				<CardContent>
                {date}
					{info.map((i) => {
						return <Typography>• {i}</Typography>;
					})}
				</CardContent>
			</Card>
		</>
	);
};