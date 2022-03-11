import React from "react";
import {Avatar, Button, IconButton, TextareaAutosize} from "@material-ui/core";
import {ImageOutlined} from "@material-ui/icons";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import {useStylesSignIn} from "../pages/SignIn";
import {useHomeStyles} from "../pages/Home/theme";
import classNames from "classnames";

interface AddPostFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

export const AddPostForm: React.FC<AddPostFormProps> = ({classes, maxRows}:AddPostFormProps): React.ReactElement => {
    const [text, setText] = React.useState<string>('');

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    };

    const handleClickAddPost = (): void => {
        setText('')
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
                    <IconButton >
                        <SentimentVerySatisfiedIcon style={{fontSize: 18}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    <Button onClick={handleClickAddPost} className={classes.addFormButton} >
                        Опубликовать
                    </Button>
                </div>
            </div>
        </div>
    )
}