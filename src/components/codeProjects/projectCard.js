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
import clsx from 'clsx';

const styles = makeStyles(theme => ({
	root: {
		width: "300px",
		maxWidth: "80%",
		margin: "1rem auto",
		borderTopRightRadius: "15px",
		borderBottomLeftRadius: "15px"
	},
	expand: {
		transform: "rotate(0deg)",
		// marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		// backgroundColor: "grey"
	},
	media: {
		height: 140
	},
	buttons: {
		margin: "0 auto"
	}
}));

export default function ProjectCard(props) {
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
					image={props.image_url}
					title="Placement Holder"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.name}
					</Typography>
					<Typography variant="body4"  component="p">
						{props.brief}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={{ buttons: classes.buttons }}>
				<Button
					size="large"
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
					size="large"
					color="primary"
					href={props.url}
					alt="Visit the project website"
				>
					Project link
				</Button>
				<Button
					size="large"
					color="primary"
					href={props.git_url}
					alt="Visit the Codebase"
				>
					Git Repo
				</Button>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph variant="body4" component="p">
						{props.info}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
