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
import {Box, Container, Paper, Button} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "10vh"
  },
  headerImage1: {
    backgroundSize:"cover",
    backgroundImage: `url(/backyard.jpg)`,
    backgroundPosition: "center",
    height: "78vh",
    objectFit: "contain",
  },
  headerFadeBottom: {
    height: "78vh",
    backgroundImage: "linear-gradient(rgba(37, 37, 37, 0.61), #000000c2)",
    marginTop: "-78vh"
  },
  container: {
    padding: "5vh 2vw 5vh 2vw"
  },
  paper: {
    backgroundColor:"transparent",
    minHeight: "40vh",
    padding: "15vh 2vw 7vh 2vw",
    zIndex: "3",
    '& h4': {
      color: "#fff",
      textAlign: "center",
      fontSize: "3.2em",
      margin: "0"
    },
    '& p': {
      color: "#fff",
      textAlign: "center",
      fontSize: "1.5em"
    }
  },
  button: {
    display:"flex", 
    justifyContent:"center", 
    paddingTop:"2.8vh",
    '& button': {
      padding: "0.8em",
      margin: "0 0.5em",
      color: "#fff",
      fontWeight: "bold"
    },
    '& button:nth-child(1)':{
      backgroundColor: "#377927"
    },
    '& button:nth-child(2)':{
      backgroundColor: "#792727"
    }
  },
  '@media screen and (max-width: 960px) and (min-width: 360px)': {
    paper: {
      padding: "10vh 1vw 6vh 1vw",
      '& h4': {
        fontSize: "2.2em",
        margin: "0"
      },
      '& p': {
        fontSize: "1.2em"
      }
    },
    button: {
      paddingTop:"1.5vh",
    }
  }
})
function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.headerImage1}>
        <Container maxWidth="md" className={classes.container}>
          <Paper className={classes.paper}>
            <h4>Landtree Service Take Care of Your Tree Troubles</h4>
            <p>We know trees. Our professional tree experts are experienced in all types of tree care and removal, and we’re committed to the highest quality service. Let us help keep your property healthy and beautiful.</p>
            <Box className={classes.button}>
              <Button variant="contained">REQUEST A QUOTE</Button>
              <Button variant="contained">VIEW SERVICES</Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Box className={classes.headerFadeBottom}/>
    </Box>
  )
}

export default Header
