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
		maxWidth: "100px",
		margin: " .5% auto 1%",
		display: "flex",
		justifyContent: "center",

	},
	logo_style: {
		maxWidth: "25%",
		// margin: "1rem 0",
		// padding:"2% 0",		
		hover:{
		'&:hover':{
			borderRadius: '50',
			boxShadow:
			   `inset 0 0 50px #fff,      /* inner white */
				inset 20px 0 80px #f0f,   /* inner left magenta short */
				inset -20px 0 80px #0ff,  /* inner right cyan short */
				inset 20px 0 300px #f0f,  /* inner left magenta broad */
				inset -20px 0 300px #0ff, /* inner right cyan broad */
				0 0 50px #fff,            /* outer white */
				-10px 0 80px #f0f,        /* outer left magenta */
				10px 0 80px #0ff `
		}
	}
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
	const {root} = classes

	// const [anchorElement, setAnchorElement] = useState(null);
	// const handleClick = (e) => {
	// 	setAnchorElement(e.currentTarget);
	// };

	// const handleClose = () => {
	// 	setAnchorElement(null);
	// };

	return (
		<div className={root}>
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
				<img src={logo} component={Link} width={"150px"} alt="Logo that says DerekEtman" />
			</a>
		</div>
	);
}
