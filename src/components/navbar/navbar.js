import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@material-ui/core";
import logo from "./assets/Derek-Logo-black-full-1.png";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	menuItem: {
		fontSize: "1.6rem",
		padding: "1rem 3rem"
	},
  menuText: {},
  logo_wrapper:{
    width:"auto",
    maxWidth:"25%",
    display:"flex",
    justifyContent:"flex-start"
  },
	logo: {
    maxWidth: "50%",
    margin:"1rem 0",
    
	}
}));

export function NavBar() {
	const [anchorElement, setAnchorElement] = useState(null);

	const handleClick = e => {
		setAnchorElement(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorElement(null);
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>

					<Menu
						anchorEl={anchorElement}
						keepMounted
						open={Boolean(anchorElement)}
						onClose={handleClose}
						classes={{ label: "" }}
					>
						<MenuItem
							className={classes.menuItem}
							onClick={handleClose}
							component={Link}
							to="/"
						>
							{" "}
							Home
						</MenuItem>
						<MenuItem
							className={classes.menuItem}
							onClick={handleClose}
							component={Link}
							to="/sound"
						>
							Sound
						</MenuItem>
						<MenuItem
							className={classes.menuItem}
							onClick={handleClose}
							component={Link}
							to="/code"
						>
							Code Projects
						</MenuItem>
						{/* <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to="/about">About Me</MenuItem> */}
						<MenuItem
							className={classes.menuItem}
							onClick={handleClose}
							component={Link}
							to="/about"
						>
							About Me
						</MenuItem>
						<MenuItem
							className={classes.menuItem}
							onClick={handleClose}
							component={Link}
							to="/contact"
						>
							Contact Me
						</MenuItem>
					</Menu>

					{/* <Typography variant="h6" color="inherit" className={classes.menuText} component={Link} to="/">
            Derek Etman
          </Typography> */}
					<a href="/" className={classes.logo_wrapper}>
						<img src={logo} component={Link} className={classes.logo} />
					</a>
				</Toolbar>
			</AppBar>
		</div>
	);
}
