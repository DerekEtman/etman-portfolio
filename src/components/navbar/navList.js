import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
	ListItem,
	List,
} from "@material-ui/core";

import logo from "./assets/Derek-Logo-black-full-1.png";

const useStyles = makeStyles((theme) => ({
	navItem:{
        color:"black"
    }
}));

let menuData = [
	{
		page_name: "Home",
		to: "/",
	},
	{
		page_name: "Code",
		to: "/code",
	},
	{
		page_name: "About",
		to: "/about",
	},
];

export default function NavList() {
	const classes = useStyles();

	return (
		<List classes={{ label: "" }}>
			{menuData.map((data, id) => (
				<ListItem 
                    className={classes.navItem} 
                    component={Link} 
                    to={`${data.to}`} 
                    key={id} 
                    alignItems="flex-end">  
					{data.page_name}
				</ListItem>
			))}
		</List>
	);
}
