import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import derek from "../splash/images/derek_leaning_no_background.png"

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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 900,
    // maxHeight:'900',
    backgroundColor:'black',
    color:'white',
    margin:"0 auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  aboutMeWrapper: {
      border:'1px solid yellow',
      margin:'0 auto',
      width:"100%"
  }
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
      <TabPanel value={value} index={0}>
            <Container className={classes.aboutMeWrapper}>
                <Typography>
                    Hello
                <img src={derek}/>
                </Typography>

            </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Resume
      </TabPanel>

    </div>
  );
}