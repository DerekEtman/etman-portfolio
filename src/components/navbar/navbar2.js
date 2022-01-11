import { makeStyles } from "@material-ui/core/styles";
import React  from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Derek-Logo-black-full-1.png";



const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		zIndex: 999,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	ListItem: {
		padding: ".5rem 1rem",
	},
	menuText: {},
	logo_wrapper: {
		width: "100%",
		maxWidth: "300px",
		margin: " 0 auto",
		display: "flex",
		justifyContent: "center",
	},
	logo: {
		maxWidth: "50%",
		margin: "1rem 0",
	},
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
}));

export function NavBar2() {
	const classes = useStyles();

	// const [anchorElement, setAnchorElement] = useState(null);
	// const handleClick = (e) => {
	// 	setAnchorElement(e.currentTarget);
	// };

	// const handleClose = () => {
	// 	setAnchorElement(null);
	// };

	return (
		<div className={classes.root}>
			{/* <AppBar position="static" color="transparent" elevation={0}>
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleClick}
					>
						<MenuIcon style={{ fontSize: 25 }} />
					</IconButton>

					<Drawer anchor="left" open={Boolean(anchorElement)} onClose={handleClose}>
						<a href="/" className={classes.logo_wrapper}>
							<img src={logo} component={Link} className={classes.logo} />
						</a>
						<NavList />
					</Drawer>
					<a href="/" className={classes.logo_wrapper}>
						<img src={logo} component={Link} className={classes.logo} />
					</a>
				</Toolbar>
			</AppBar> */}


			<a href="/" className={classes.logo_wrapper}>
				<img src={logo} component={Link} className={classes.logo} alt="Logo that says DerekEtman" />
			</a>
		</div>
	);
}
