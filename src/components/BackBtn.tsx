import React from 'react';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export const BackBtn: React.FC = ():React.ReactElement => {
    const history = useHistory();
    const handleClickButton = () => {
        history.goBack();
    };


    return (
        <IconButton onClick={handleClickButton} color="primary">
            <ArrowBackIosIcon/>
        </IconButton>
    );
}

