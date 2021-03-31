/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: MyDialog.js
 * Key Options:
 * -
 * Revision History:
 * - Feb 17, 2021, developer Martin Hwang < developer.martinhwang@gmail.com >
 */
import React from "react";
import {Box,
        Dialog,
        DialogTitle,
        DialogContent,
        DialogActions,} from "@material-ui/core";
        // material-ui style
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
    title:{
        color:"#377927",
        textAlign: "center",
        fontWeight: "bolder"
    },
    content:{
        color:"#377927",
    }
})
function MyDialog(prop) {
    const classes = useStyles();
    return (
        <Box>
            <Dialog onClose={prop.onClose} open={prop.open}>
            {prop.dialogTitleActive?
                <DialogTitle className={classes.title} id={prop.id} onClose={prop.onClose}>
                    {prop.title}
                </DialogTitle>
                : null
            }
                <DialogContent className={classes.content} dividers={prop.dividers}>
                    {prop.content}
                </DialogContent>
            {prop.dialogActionsActive? 
                <DialogActions>
                    {prop.actions}
                </DialogActions>
                : null
            }
            </Dialog>
        </Box>
    )
}
export default MyDialog
