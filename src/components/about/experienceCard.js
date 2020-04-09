import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	skillContainer: {
		// width: "8%",
		boxShadow: "none",
	},
}));

export default function ExperienceCard(props){
    const classes = useStyles();

    return(
        <>
        Experience Card 
        {console.log(props)}
        </>
    )
}