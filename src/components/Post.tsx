import React from "react";
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import {useHomeStyles} from "../pages/Home/theme";
import { Link } from "react-router-dom";

interface PostProps {
    _id: string;
    classes: ReturnType<typeof useHomeStyles>;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Post: React.FC<PostProps> = ({_id, text, classes, user,}: PostProps): React.ReactElement => {
    return (
        <Link className={classes.postWrapper} to={`home/post/${_id}`}>
        <Paper className={classes.headerCentralWrapper} variant="outlined">

                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar
                            alt={`user-ava ${user.fullname}`}
                            src={user.avatarUrl}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullname}</b> <span className={classes.userNameNewsFeed}>@{user.username}</span>
                        </Typography>
                        <Typography variant="body2">{text}</Typography>
                        <div className={classes.footerCentralWrapper}>
                            <div>
                                <IconButton>
                                    <CommentIcon style={{fontSize: 16}}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepeatIcon style={{fontSize: 16}}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <FavoriteBorderIcon style={{fontSize: 16}}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <SaveAltIcon style={{fontSize: 16}}/>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>


        </Paper>
        </Link>
    )
}


