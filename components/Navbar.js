/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Navbar.js
 * Key Options:
 * -
 * Revision History:
 * - March 23, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 */
import React, {useState, useEffect} from 'react'
// material-ui core
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
// material-ui icons
import {Facebook,
  Instagram,
  Twitter,
  Phone} from '@material-ui/icons'
// utils
import {openNewBrowserWindow} from '../components/utils/utils'
const useStyles = makeStyles({
  root:{
    fontSize: "1.5em",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop:"1em",
    zIndex: "1",
  },
  ul: {
    display: "flex",
    paddingRight: "1vw"
  },
  li: {
    listStyleType:"none",
    padding: "1vw",
    '&:hover': {
      cursor: "pointer"
    }
  },
  showNav: {
    display: "flex",
    flexDirection: "column-reverse",
    position: "fixed",
    right: "0.5em",
    top: "2.5em",
    '& li': {
      padding: "0.1em"
    },
    '& li:nth-child(4)': {
      '& a': {
        background: "none"
      },
      '& span:nth-child(1)': {
        '& svg': {
          color: "#66b653"
        }
      },
      '& span:nth-child(2)': {
        display: "none"
      }
    }
  },
  logo: {
    width: "4em",
    paddingLeft: "2vw"
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
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      }else{
        setShowNav(false);
      }
    });
  }, []);
  return (
    <Box className={classes.root}>
      <Box>
        <img className={classes.logo} src="/landtree_service_logo.png" width="100px" height="100px"/>
      </Box>
      <Box>
        <ul className={showNav?classes.showNav:classes.ul}>
          <li className={classes.li}>
            <a 
              onClick={() => {openNewBrowserWindow("https://www.facebook.com/landtree.kang")}}>
              <Facebook className={classes.icon}/> 
            </a>
          </li>
          <li className={classes.li}>
            <a 
              onClick={() => {openNewBrowserWindow("https://www.instagram.com/landtreeservice/")}}>
              <Instagram className={classes.icon}/>  
            </a>
          </li>
          <li className={classes.li}>
            <a 
              onClick={() => {openNewBrowserWindow("https://twitter.com/landtreeservice")}}>
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
