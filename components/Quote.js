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
import React, {useState}from "react";
// material-ui core
import {Box, Container, Button, FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import MyTextField from "../components/tags/MyTextField"
const useStyles = makeStyles({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    '& .MuiCheckbox-root':{
      color: "#377927"
    },
  },
  container: {
    padding: "5vh 2vw 5vh 3vw",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  paper: {
    margin: "1em",
    width: "40em",
    minHeight: "40vh",
    padding: "4vh 2.5vw 3vh 2.5vw",
    // zIndex: "3",
    '& h4': {
        color: "#000",
        textAlign: "center",
        fontSize: "2em",
        // padding: "0.5em",
        margin: "0 0 0.5em 0"
    },
    '& h5': {
      color: "#000",
      textAlign: "center",
      fontSize: "1.5em",
      // padding: "0.5em",
      margin: "0 0 0.5em 0"
    },
    '& p': {
        color: "#000",
        textAlign: "justify",
        fontSize: "1.2em",
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
    padding:"0 3.5em",
    '& p': {
      marginTop: "0",
    }
  },
  contact: {
    display: "flex",
  },
  phonenumber: {
    width:"100%",
    padding: "0 0 0 0.1em"
  },
  message: {
    minHeight: "10em"
  },
  service: {
    '& span': {
      color: "#377927",
      fontSize: "0.9rem"
    },
    '& legend': {
      color: "#377927",
      paddingBottom: "1em"
    }
  },
  '@media screen and (max-width: 960px) and (min-width: 360px)': {
    root: {
      '& .MuiCheckbox-root':{
        fontSize: "0.7em"
      },
    },
    container:{
      '& div:nth-child(1)': {
      }
    },
    paper1: {
      margin: "0 2vw"
    },
    contact: {
      flexWrap: "wrap",
    },
    form:{
      padding:"0",
    },
    service: {
      '& span': {
        fontSize: "0.7em",
      },
    },
    paper: {
      '& p': {
          textAlign: "justify",
          fontSize: "1em",
      },
    },
  }
})
function Quote() {
  const classes = useStyles();
  const [request, setRequest] = useState({
    fullName: "",
    email: "",
    phoneNumber:"",
    lawnCutting: "",
    interlocking: "",
    message: ""
  });
  const handleChange = (e) => {
    const {id, value} = e.target;
    setRequest(prevState => ({
      ...prevState,
      [id]: value
    }));
  }
  const requestEstimate = () => {
    fetch("https://formsubmit.co/ajax/hic0811@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          FullName: request.fullName,
          Email: request.email,
          PhoneNumber:request.phoneNumber,
          LawnCutting:request.lawnCutting,
          Interlocking:request.interlocking,
          Message: request.message
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    console.log('request', request);
  }
  return (
    <Box className={classes.root}>
        <Container maxWidth="xl" className={classes.container}>
            <Box className={classes.paper}>
              <h4>We’ll take care of your trees</h4>
              <p>Trees are typically considered an asset to your property, but a number of factors can transform these assets into liabilities. We’d love to work with you to ensure your trees are healthy, safe and beautiful and an asset to your property for many years to come.</p>
              <p>Working with trees can be dangerous. Our arborists are experienced, educated, and have the property gear to get the job done safely.</p>
            </Box>
            <Box className={classes.paper} id="quote">
              <h5>The More Landtree Service The Easier Your Life</h5>
              <Box>
                <form className={classes.form}>
                  <p>
                    <MyTextField
                      variant="outlined"
                      margin="normal"
                      required={true}
                      fullWidth={true}
                      id="fullName"
                      label="Full Name"
                      type="text"
                      // helperText={errors.name}
                      // name="fullName"
                      value={request.fullName}
                      onChange={handleChange}/>
                  </p>
                  <div className={classes.contact}>
                    <p className={classes.phonenumber}>
                      <MyTextField
                        variant="outlined"
                        margin="normal"
                        required={true}
                        fullWidth={true}
                        id="email"
                        label="Email Address"
                        type="email"
                        // helperText={errors.email}
                        // name="email"
                        value={request.email}
                        autoComplete="email"
                        onChange={handleChange}/>
                    </p>
                    <p className={classes.phonenumber}>
                      <MyTextField
                        variant="outlined"
                        margin="normal"
                        required={true}
                        fullWidth={true}
                        id="phoneNumber"
                        label="Phone Number"
                        type="text"
                        // helperText={errors.email}
                        // name="phoneNumber"
                        value={request.phoneNumber}
                        onChange={handleChange}/>
                    </p>
                  </div>
                  <p className={classes.service}>
                    <Box  color="#377927"
                          border = "1px solid #377927"
                          borderRadius ="5px"
                          padding = "10px"
                    >
                      <legend>Service Type</legend>
                      <FormGroup>
                        <table>
                          <tr>
                            <td>
                              <FormControlLabel
                                control={<Checkbox onChange={
                                  e => {e.target.checked?setRequest(prevState =>({...prevState,lawnCutting: "true"})):setRequest(prevState =>({...prevState,lawnCutting: "false"}))}}/>}
                                label="Lawn Cutting"/>
                            </td>
                            <td>
                              <FormControlLabel
                                control={<Checkbox onChange={
                                  e => {e.target.checked?setRequest(prevState =>({...prevState,interlocking: "true"})):setRequest(prevState =>({...prevState,interlocking: "false"}))}}/>}
                                label="Interlocking"/>
                            </td>
                            <td>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Planting Lawn"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Backyard Cleanup"/>
                            </td>
                            <td>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Roofing Cleanup"/>
                            </td>
                            <td>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="Tree Service"/>
                            </td>
                          </tr>
                        </table>
                      </FormGroup>
                    </Box>
                  </p>
                  <p>
                    <MyTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth={true}
                      id="message"
                      label="How can we help you?"
                      type="text"
                      // helperText={errors.email}
                      // name="quote_message"
                      value={request.message}
                      InputProps={{
                        className: classes.message
                      }}
                      onChange={handleChange}/>
                  </p>
                  <Button
                    // type="submit"
                    // fullWidth
                    variant="contained"
                    className={classes.requestButton}
                    onClick={requestEstimate}>
                    Request Free Estimate
                  </Button>
                </form>
              </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Quote
