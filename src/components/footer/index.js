import React from "react";
import { makeStyles, Container, Link } from "@material-ui/core";
import ExpandLessSharpIcon from "@material-ui/icons/ExpandLessSharp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "black",
		fontFamily: "'Bebas Neue', cursive",
		color: "white",
	},
	top_of_page: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		padding: 0,
    },
    social_links: {
        padding:".5% 0", 
    },
    sub_menu: {
        padding:".5% 0", 
    },
    copyright: {
        padding:".5% 0", 
        color:"darkgrey"
    },
    sub_menu_link:{
        color:"white",
        fontSize:"1.5rem",
        padding:"0 1%",
    },
    social_icon:{
        color:"white",
        padding:"0 3%",
    }
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.top_of_page}>
				<a href="#top">
					<ExpandLessSharpIcon fontSize="large" style={{ color: "white" }} />
				</a>
			</div>
			<div className={classes.social_links}>
				<a href="https://www.linkedin.com/in/dereketman/">
					<LinkedInIcon  fontSize="large" className={classes.social_icon}/>
				</a>

				<a href="https://github.com/DerekEtman">
					<GitHubIcon fontSize="large" className={classes.social_icon}/>
				</a>
				<a href="https://twitter.com/DerekEtman">
					<TwitterIcon fontSize="large" className={classes.social_icon}/>
				</a>
				<a href="https://www.instagram.com/dereketman">
					<InstagramIcon fontSize="large" className={classes.social_icon}/>
				</a>
			</div>
			<div className={classes.sub_menu}>
                <Link href="/" className={classes.sub_menu_link} > Home</Link>
                <Link href="/code" className={classes.sub_menu_link} > Code</Link>
                <Link href="/sound" className={classes.sub_menu_link} > Sound</Link>
                <Link href="/about" className={classes.sub_menu_link} > About</Link>

                </div>
			<div className={classes.copyright}>Copyright Derek Etman 2020.</div>
		</div>
	);
}
