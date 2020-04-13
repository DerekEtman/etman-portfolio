import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";


const styles = makeStyles(theme => ({
	root: {
		width: "300px",
		maxWidth: "80%",
		margin: "1rem auto",
		borderTopRightRadius: "15px",
		borderBottomLeftRadius: "15px",
		fontFamily:"'Bebas Neue', cursive",

	},
	expand: {
		transform: "rotate(0deg)",
		// marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	media: {
		height: 140
	},
	buttons: {
		margin: "0 auto"
	},
	brief: {
		height: "100px",
		margin: "0 auto 2rem",
		fontFamily: "'Montserrat', sans-serif",

	},
	brief_header: {
		borderBottom: "1px solid green",
		paddingBottom: ".5rem",
		fontFamily:"'Bebas Neue', cursive",

	},
	infoList: {
		fontSize:"small",
		padding:".5rem 0",
		fontFamily: "'Montserrat', sans-serif",
	}
}));

export default function ProjectCard(props) {
	const { key, image_url, name, brief, info, url, git_url } = props;
	const classes = styles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// console.log("props: ", props);

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={image_url}
					title="Placement Holder"
				/>
				<CardContent className={classes.brief}>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						className={classes.brief_header}
					>
						{name}
					</Typography>
					<Typography variant="body4" component="p">
						{brief}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={{ buttons: classes.buttons }}>
				<Button
					size="medium"
					color="secondary"
					alt="Learn more about this project"
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					Learn More
				</Button>
				<Button
					size="medium"
					color="primary"
					href={url}
					alt="Visit the project website"
				>
					Project link
				</Button>
				<Button
					size="medium"
					color="primary"
					variant="h2"
					href={git_url}
					alt="Visit the Codebase"
				>
					Git Repo
				</Button>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					{info.map(element => {
						return (
							<Typography component="h2" className={classes.infoList}>
								{element}
							</Typography>
						);
					})}
				</CardContent>
			</Collapse>
		</Card>
	);
}
