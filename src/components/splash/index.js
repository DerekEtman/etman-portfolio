import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';
// import Box from "@material-ui/system";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export function MainSplash() {

    const classes = useStyles();

    return (
    <div className="MainSplashContainer">
        <Container maxWidth="xl" className="Splash_Container">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h1 id="Splash_Hello">HELLO!</h1>
                  <h3 id="Splash_Message"> I'M DEREK</h3>
                  <h3 id="Splash_Message2"> HOW CAN I HELP?</h3>
                </Grid>
                <Grid item l={6} className="splash_nav_container" justify = "right">
                  <Link href="#" id="splash_nav">CODE</Link>
                  <Link href="#" id="splash_nav">MUSIC</Link>
                  <Link href="#" id="splash_nav">MORE</Link>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="xl">
            <Grid>
          <p>Enim ex nulla occaecat magna consequat nisi et qui sint magna. Elit duis irure esse quis enim ullamco incididunt exercitation fugiat fugiat laborum. Velit duis esse ullamco veniam anim fugiat pariatur sunt minim do. Proident non sint veniam anim enim deserunt commodo magna qui excepteur ad consequat voluptate.</p>

            </Grid>

        </Container>
    </div>
				);
};