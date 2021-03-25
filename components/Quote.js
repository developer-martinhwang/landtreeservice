/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Header.js
 * Key Options:
 * -
 * Revision History:
 * - March 24, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from "react";
// material-ui core
import {Box, Container, Paper} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
  },
  container: {
    padding: "5vh 2vw 5vh 2vw",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  paper: {
    // backgroundColor:"red",
    margin: "1em",
    width: "40em",
    minHeight: "40vh",
    padding: "5vh 2.5vw 5vh 2.5vw",
    // zIndex: "3",
    '& h4': {
        color: "#000",
        textAlign: "center",
        fontSize: "2em",
        padding: "0.5em",
        margin: "0 0 0.5em 0"
    },
    '& p': {
        color: "#000",
        textAlign: "justify",
        fontSize: "1.2em",
        padding: "0.5em",
    }
  },
  '@media screen and (max-width: 960px) and (min-width: 360px)': {
    paper: {
      padding: "2vh 2vw 2vh 2vw",
    },
  }
})
function Quote() {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="quote">
        <Container maxWidth="xl" className={classes.container}>
            <Paper className={classes.paper}>
                <h4>We’ll take care of your trees</h4>
                <p>Trees are typically considered an asset to your property, but a number of factors can transform these assets into liabilities. We’d love to work with you to ensure your trees are healthy, safe and beautiful and an asset to your property for many years to come.</p>
                <p>Working with trees can be dangerous. Our arborists are experienced, educated, and have the property gear to get the job done safely.</p>
            </Paper>
            <Paper className={classes.paper}>
            </Paper>
        </Container>
    </Box>
  )
}

export default Quote
