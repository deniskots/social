import React from "react";
import {TextField, withStyles, Theme} from "@material-ui/core";


export const SearchTextField = withStyles((theme:Theme) => ({
    root: {
        '& label.Mui-focused': {
            color: 'rgb(26, 145, 218)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(26, 145, 218)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(26, 145, 218)',
            },
        },
    },
}))(TextField);