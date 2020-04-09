import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import derek from "../splash/images/derek_leaning_no_background.png";
import Paper from "@material-ui/core/Paper";

import resumeBuilder from "./resumeBuilder";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: "flex",
		backgroundColor: "black",
		color: "white",
		margin: "0 auto",
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	aboutMeTab: {
		margin: "0 auto",
		width: "100%",
		minHeight: "92vh",
	},
	resumeTab: {
		// border: "1px solid yellow",
		margin: "0 auto",
		width: "100%",
		// height: "90vh",
	},
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab label="About Derek" {...a11yProps(0)} />
				<Tab label="Resume" {...a11yProps(1)} />
			</Tabs>

			{/* First Tab - About Me */}
			<TabPanel value={value} index={0} className={classes.aboutMeTab}>
					{resumeBuilder}
			</TabPanel>

			{/* Second Tab - Resume */}
			<TabPanel value={value} index={1} className={classes.resumeTab}>
				{resumeBuilder}
			</TabPanel>
		</div>
	);
}
