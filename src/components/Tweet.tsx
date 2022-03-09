import React from "react";
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import {useHomeStyles} from "../pages/Home";

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({text, classes, user}:TweetProps):React.ReactElement => {
    return (
        <Paper className={classes.headerCentralWrapper} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar
                        alt={`user-ava ${user.fullname}`}
                        src= {user.avatarUrl} />
                </Grid>
                <Grid item xs={11} >
                    <Typography>
                        <b>{user.fullname}</b> <span className={classes.userNameNewsFeed}>@{user.username}</span>
                    </Typography>
                    <Typography variant="body2">
                        Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная
                        на каком-либо материальном носителе человеческая мысль;
                        в общем плане связная и полная последовательность символов.
                    </Typography>
                    <div className={classes.footerCentralWrapper}>
                        <div>
                            <IconButton>
                                <CommentIcon style={{fontSize: 16}} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepeatIcon style={{fontSize: 16}} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <FavoriteBorderIcon style={{fontSize: 16}} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <SaveAltIcon style={{fontSize: 16}} />
                            </IconButton>

                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}


