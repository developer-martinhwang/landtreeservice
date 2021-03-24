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
import {Box} from "@material-ui/core";
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
    height: "55vh",
    objectFit: "contain",
  },
  headerFadeBottom: {
    height: "7.4vh",
    backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #377927)",
    marginTop: "-7vh"
  }
})
function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.headerImage1}/>
      <Box className={classes.headerFadeBottom}/>
    </Box>
  )
}

export default Header
