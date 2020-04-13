import React, { useState } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem, List, ListItem, Divider,ListItemIcon,ListItemText, Toolbar, Typography,AppBar, IconButton  } from "@material-ui/core";
import {InboxIcon,MailIcon} from '@material-ui/icons/MoveToInbox';

import logo from "./assets/Derek-Logo-black-full-1.png";


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
    marginRight: theme.spacing(2),
    // width: 120,
    // height: 120,
    // padding: 30,
	},
	menuItem: {
		// fontSize: "1.6rem",
		padding: ".5rem 1rem"
	},
  menuText: {},
  logo_wrapper:{
    width:"auto",
    maxWidth:"300px",
    display:"flex",
    justifyContent:"flex-start"
  },
	logo: {
    maxWidth: "50%",
    margin:"1rem 0",
    
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export function NavBar() {
  const [anchorElement, setAnchorElement] = useState(null);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })


  const toggleDrawer = (anchor, open) => event =>{
    if(event && event.type ==='keydown' && (event.key === 'Tab' || event.key ==='shift')) {
      return;
    }
    setState({...state,[anchor]: open});
  }

  
	const handleClick = e => {
		setAnchorElement(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorElement(null);
	};

  const classes = useStyles();
  
  // const list = anchor => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //     })}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

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
						<MenuIcon style={{fontSize:25}}/>
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
						{/* <MenuItem
							className={classes.menuItem}
							onClick={handleClose}
							component={Link}
							to="/sound"
						>
							Sound
						</MenuItem> */}
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
							to="/about"
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
