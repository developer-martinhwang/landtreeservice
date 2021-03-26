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
import {Box, Container, Paper, InputAdornment, Button} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import MyTextField from "../components/tags/MyTextField"
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
    '& h5': {
      color: "#000",
      textAlign: "center",
      fontSize: "1.5em",
      padding: "0.5em",
      margin: "0 0 0.5em 0"
    },
    '& p': {
        color: "#000",
        textAlign: "justify",
        fontSize: "1.2em",
        padding: "0.5em",
    },
  },
  requestButton: {
    display:"flex",
    justifyContent:"center",
    margin: "3.5em",
    backgroundColor: "#377927",
    minHeight: "5vh",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#499f34",
      fontWeight: "bold"
    }
  },
  form:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
  },
  phonenumber: {
    background: "red"
  },
  '@media screen and (max-width: 960px) and (min-width: 360px)': {
    paper: {
      padding: "2vh 2vw 2vh 2vw",
    },
  }
})
function Quote() {
  const classes = useStyles();
  const handleChange = (e) => {
    const {id, value} = e.target;
    // setUser(prevState => ({
    //   ...prevState,
    //   [id]: value
    // }));
  }
  return (
    <Box className={classes.root} id="quote">
        <Container maxWidth="xl" className={classes.container}>
            <Paper className={classes.paper}>
              <h4>We’ll take care of your trees</h4>
              <p>Trees are typically considered an asset to your property, but a number of factors can transform these assets into liabilities. We’d love to work with you to ensure your trees are healthy, safe and beautiful and an asset to your property for many years to come.</p>
              <p>Working with trees can be dangerous. Our arborists are experienced, educated, and have the property gear to get the job done safely.</p>
            </Paper>
            <Paper className={classes.paper}>
              <h5>The More Landtree Service The Easier Your Life</h5>
              <Box padding="0 4em 0 4em">
                <form className={classes.form}>
                  <MyTextField
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    id="name"
                    label="Full Name"
                    type="text"
                    // helperText={errors.name}
                    name="name"
                    // value={user.name}
                    onChange={handleChange}/>
                    <MyTextField
                      className={classes.email}
                      variant="outlined"
                      margin="normal"
                      required={true}
                      fullWidth={true}
                      id="email"
                      label="Email Address"
                      type="email"
                      // helperText={errors.email}
                      name="email"
                      // value={user.email}
                      autoComplete="email"
                      onChange={handleChange}/>
                    <MyTextField
                      className={classes.phonenumber}
                      variant="outlined"
                      margin="normal"
                      required={true}
                      fullWidth={true}
                      id="phone_number"
                      label="Phone Number"
                      type="text"
                      // helperText={errors.email}
                      name="phone_number"
                      // value={user.email}
                      onChange={handleChange}/>
                  <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    className={classes.requestButton}>
                    Request Free Estimate
                  </Button>
                </form>
              </Box>
            </Paper>
        </Container>
    </Box>
  )
}

export default Quote
