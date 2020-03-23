import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
	root: {
		maxWidth: "350px",
		margin: "2rem auto"
	},
	media: {
		height: 140
	},
	buttons: {
		margin: "0 auto"
	},

});

export default function projectCard(props) {
	const classes = styles();
	console.log("props: ", props);

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
					<Typography variant="body2" color="textSecondary" component="p">
						{props.info}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={{buttons: classes.buttons}}>
				<Button size="large" color="primary" href={props.url}>
					Project link
				</Button>
				<Button size="large" color="primary" href={props.git_url}>
					Git Repo
				</Button>
			</CardActions>
		</Card>
	);
}
