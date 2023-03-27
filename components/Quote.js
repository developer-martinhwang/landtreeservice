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
import {Box, Container, Button, FormGroup, FormControlLabel, Checkbox, TextField } from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
// components
import MyTextField from "../components/tags/MyTextField"
import MyDialog from '../components/tags/MyDialog'
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
    '& h4': {
        color: "#000",
        textAlign: "center",
        fontSize: "2em",
        margin: "0 0 0.5em 0"
    },
    '& h5': {
      color: "#000",
      textAlign: "center",
      fontSize: "1.5em",
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
    minHeight: "10em",
    color: "#377927",
  },
  service: {
    '& span': {
      color: "#377927",
      fontSize: "0.9rem"
    },
    '& legend': {
      color: "#377927",
      paddingBottom: "1em"
    },
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
    address:"",
    tree_service:false,
    backyard_cleaning:false,
    planting_lawn: false,
    root_stumping: false,
    message: ""
  });
  const [dialog, setDialog] = useState({
    confrimation: false,
  })
  const handleChange = (e) => {
    const {id, value, type, checked} = e.target;
    if(type === "text" || type ==="email"){
      setRequest(prevState => ({
        ...prevState,
        [id]: value
      }));
    } 
    if (type === "checkbox"){
      setRequest(prevState => ({
        ...prevState,
        [id]: checked
      }));
    }
  }
  const requestEstimate = () => {
    if(request.fullName !== "" && request.email !== "" && request.phoneNumber !== "" && request.address){
      fetch("https://formsubmit.co/ajax/369gdh@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Full_name: request.fullName,
            Email: request.email,
            PhoneNumber:request.phoneNumber,
            Address:request.address,
            Tree_service:request.tree_service?"true":"false",
            Backyard_cleaning:request.backyard_cleaning?"true":"false",
            Planting_lawn: request.planting_lawn?"true":"false",
            Root_stumping: request.root_stumping?"true":"false",
            Message: request.message
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
      setDialog({
        confrimation: true
      })
    } 
  }
  const handleDialogClose = () => {
    setDialog({
      confrimation: false
    })
    setRequest({
      fullName: "",
      email: "",
      phoneNumber:"",
      tree_service:false,
      backyard_cleaning:false,
      planting_lawn: false,
      root_stumping: false,
      message: ""
    });
  }
  const content = (
    <Box>
      <Box>
        <p>Full Name: {request.fullName}</p>
        <p>Email: {request.email}</p>
        <p>Phone Number: {request.phoneNumber}</p>
        <p>Address: {request.address}</p>
        <p>Tree Service: {request.tree_service?"Yes":"No"}</p>
        <p>Root Stumping: {request.root_stumping?"Yes":"No"}</p>
        <p>Planting Lawn: {request.planting_lawn?"Yes":"No"}</p>
        <p>Backyard Cleaning: {request.backyard_cleaning?"Yes":"No"}</p>
      </Box>
    </Box>
  )
  const action= (
    <Box color="#377927" fontWeight="bold">
      <p>Thank you for your request. The professional team in Landtree Service will contact you.</p>
    </Box>
  )
  const requestConfrimation = (
    <MyDialog
      dialogTitleActive={true}
      dialogActionsActive={true}
      onClose={handleDialogClose}
      open={dialog.confrimation}
      title={<Box fontWeight="bolder">Request Confirmation"</Box>}
      dividers={true}
      content={content}
      actions={action}
      />
  )
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
                        label="Email"
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
                  <p>
                    <MyTextField
                      variant="outlined"
                      margin="normal"
                      required={true}
                      id="address"
                      fullWidth={true}
                      label="Address"
                      type="text"
                      // helperText={errors.name}
                      // name="address"
                      value={request.address}
                      onChange={handleChange}/>
                  </p>
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
                                control={<Checkbox checked={request.tree_service} id="tree_service" onChange={handleChange}/>}
                                label="Tree Service"/>
                            </td>
                            <td>
                              <FormControlLabel
                                 control={<Checkbox checked={request.root_stumping} id="root_stumping" onChange={handleChange}/>}
                                 label="Root Stumping"/>
                            </td>
                            <td>
                              <FormControlLabel
                                control={<Checkbox checked={request.planting_lawn} id="planting_lawn" onChange={handleChange}/>}
                                label="Planting Lawn"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormControlLabel
                                control={<Checkbox checked={request.backyard_cleaning} id="backyard_cleaning" onChange={handleChange}/>}
                                label="Backyard Cleaning"/>
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
                        maxLength: 200,
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
            {requestConfrimation}
        </Container>
    </Box>
  )
}

export default Quote
