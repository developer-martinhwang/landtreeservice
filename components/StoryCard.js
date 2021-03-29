/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: StoryCard.js
 * Key Options:
 * -
 * Revision History:
 * - March 28, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 *   : created
 */
import React from "react";
// material-ui core
import {Box, Typography} from "@material-ui/core";
// material-ui style
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
    root: {
        width: "100%",
        marginTop: "2.5vh"
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        padding: "1.2em",
        justifyContent: "space-evenly",
    },
    col: {
        fontSize: "1.2rem",
        position: "relative",
        width: "28vw",
        padding: "2vh 3vw",
        '@media screen and (max-width: 960px)': {
            width: "100%",
            // marginBottom: "30px",
            textAlign: "center"
        }
    },
    image: {
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        objectFit: "cover",
        height: "28vh",
        boxShadow: "0 0 8px 8px white inset",
        '@media screen and (max-width: 960px)': {
            marginBottom: "30px"
        }
    },
    title: {
        fontSize: "2.3rem",
        fontWeight: "bolder",
        textAlign:"center",
        '@media screen and (max-width: 960px) and (min-width: 360px)': {
           fontSize: "1.6rem",
           padding: "0",
           margin: "0"
        }
    },
    subtitle: {
        fontSize: "1.5rem",
        paddingLeft: "3px",
        textAlign: "center",
        '@media screen and (max-width: 960px) and (min-width: 360px)': {
            fontSize: "1rem",
            padding: "0",
            margin: "0"
        }
    }
})
// function:
// if index # even flexDirection row-reverse
// # odd flexDirection row
const flexDirection = (index) => {
    if (index%2 === 0) {
        return "row-reverse"
    }else {
        return "row"
    }
}
function StoryCard(prop) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.row} flexDirection={flexDirection(prop.index)}>
                <Box className={classes.col}>
                    <Box className={classes.image} style={{backgroundImage:`url(${prop.image})`}}/>
                </Box>
                <Box className={classes.col} marginTop="3vh">
                    <Typography className={classes.title}>{prop.title}</Typography>
                    <Typography className={classes.subtitle}>{prop.subtitle}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StoryCard
