/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Navbar.js
 * Key Options:
 * -
 * Revision History:
 * - March 23, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 */
import React from 'react'
// material-ui core
import {Box, List, ListItem} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
// material-ui icons
import {Facebook,
  Instagram,
  Twitter,
  Phone} from '@material-ui/icons'
const useStyles = makeStyles({
  root:{
    fontSize: "1.5em",
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    marginTop:"1em"
  },
  socialcommunity: {
    display: "flex",
  },
  logo: {
    padding: "8px",
    '@media screen and (max-width: 960px)': {
    
    }
  },
  phone:{
    background: "#028e53",
    borderRadius: "5px",
    display: "flex",
    padding: "0.15em",
    color: "#fff",
    fontWeight: "bolder",
    '& span': {
      padding: "0.1em"
    },
    '&:hover': {
      background: "#03ae66"
    }
  },
  icon: {
    fontSize: "1.3em",
    color: "#028e53"
  }
})
function Navbar() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        Landtree Service
      </Box>
      <Box>
        <List className={classes.socialcommunity}>
          <ListItem>
            <a href="#">
              <Facebook className={classes.icon}/> 
            </a>
          </ListItem>
          <ListItem>
            <a href="#">
              <Instagram className={classes.icon}/>  
            </a>
          </ListItem>
          <ListItem>
            <a href="#">
              <Twitter className={classes.icon}/>
            </a>
          </ListItem>
          <ListItem>   
            <a className={classes.phone} href="tel:6479855654">
              <span><Phone/></span>
              <span>647-985-5654</span>
            </a>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Navbar
