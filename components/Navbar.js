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
  ul: {
    display: "flex",
  },
  li: {
    listStyleType:"none",
    padding: "1vw"
  },
  logo: {
    width: "4em",
  },
  phone:{
    background: "#66b653",
    borderRadius: "5px",
    display: "flex",
    padding: "0.15em",
    color: "#fff",
    '& span': {
      color: "#fff",
      padding: "0.1em"
    },
    '&:hover': {
      background: "#377927"
    }
  },
  icon: {
    fontSize: "1.3em",
    color: "#66b653",
  },
  '@media screen and (max-width: 960px)': {
    phone: {
      backgroundColor:"#fff",
      '& svg': {
        // fontSize:"1.3em",
        color: "#66b653",
      },
      '& span:nth-child(1)': {
        padding: "0"
      },
      '& span:nth-child(2)': {
        display: "none"
      },
      '&:hover': {
        background: "none"
      }
    },
  }
})
function Navbar() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <img className={classes.logo} src="/landtree_service_logo.png" width="100px" height="100px"/>
      </Box>
      <Box>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <a href="#">
              <Facebook className={classes.icon}/> 
            </a>
          </li>
          <li className={classes.li}>
            <a href="#">
              <Instagram className={classes.icon}/>  
            </a>
          </li>
          <li className={classes.li}>
            <a href="#">
              <Twitter className={classes.icon}/>
            </a>
          </li>
          <li className={classes.li}>   
            <a className={classes.phone} href="tel:6479855654">
              <span><Phone /></span>
              <span>647-985-5654</span>
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  )
}

export default Navbar
