/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Footer.js
 * Key Options:
 * -
 * Revision History:
 * - March 23, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from 'react'
// material-ui core
import {Box, Typography} from '@material-ui/core'
// material-ui styles
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
  root: {
    padding: "2em 2em 1.5em 2em",
  },
  copyright: {
    fontSize:"1.2rem",
    "& span":{
      color: "#304ffe"
    },
  }
});
function Footer(prop) {
  const classes = useStyles(prop);
  return (
    <Box className={classes.root}>
      <Typography className={classes.copyright} variant="body1">&copy; {new Date().getFullYear()}, All Right Reserved - Landtreeservice.com</Typography>
    </Box>
  )
}

export default Footer
