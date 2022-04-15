import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {useHomeStyles} from "../pages/Home/theme";

import {Avatar, Button, IconButton, TextareaAutosize,} from "@material-ui/core";
import {ImageOutlined} from "@material-ui/icons";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";


import {fetchAddPost} from "../store/ducks/posts/actionCreators";
import {selectAddFormState} from "../store/ducks/posts/selectors";
import {AddFormState} from "../store/ducks/posts/contracts/state";
import {Alert} from "@material-ui/lab";


interface AddPostFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 100;

export const AddPostForm: React.FC<AddPostFormProps> = ({classes, maxRows}: AddPostFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const addFormState = useSelector(selectAddFormState);
    const [text, setText] = React.useState<string>('');
    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    };
    const handleClickAddPost = (): void => {
        setText('')
        dispatch(fetchAddPost(text))
    };


    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    alt={`avatar user`}
                    src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.footerCentralWrapper, classes.addFormBottomActions)}>
                    <IconButton>
                        <ImageOutlined style={{fontSize: 18}}/>
                    </IconButton>
                    <IconButton>
                        <SentimentVerySatisfiedIcon style={{fontSize: 18}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    <Button
                        className={classes.addFormButton}
                        onClick={handleClickAddPost}
                        variant="contained"
                        color="primary"
                        disabled={!text || text.length >= MAX_LENGTH}>
                        Опубликовать
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && <Alert severity="error">Ошибочка друг мой</Alert>}
        </div>
    )
}