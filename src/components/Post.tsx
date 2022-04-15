import React from "react";
import {Avatar, IconButton, Paper, Typography, MenuItem, Menu} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import {useHomeStyles} from "../pages/Home/theme";
import {Link, useHistory} from "react-router-dom";
import classNames from "classnames";
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    const [anchorEl, setAnchorEl] = React.useState<null | MathMLElement>(null);
    const open = Boolean(anchorEl);
    const history = useHistory();

    const handleClickPost = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        history.push(`home/post/${_id}`);
    }

    const handleClick = (event: React.MouseEvent<HTMLElement> ) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <a onClick={handleClickPost} className={classes.postWrapper} href={`home/post/${_id}`}>
            <Paper className={classNames(classes.post, classes.headerCentralWrapper,)} variant="outlined">
                <Avatar
                    className={classes.postAvatar}
                    alt={`user-ava ${user.fullname}`}
                    src={user.avatarUrl}/>
                <div className={classes.postContent}>
                    <Typography className={classes.postHeader}>
                        <div>
                            <b>{user.fullname}</b>
                            <span className={classes.userNameNewsFeed}>@{user.username}</span>
                        </div>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}

                        >
                            <MenuItem onClick={handleClose}>
                                Изменить
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Удалить
                            </MenuItem>
                        </Menu>
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
                </div>

            </Paper>
        </a>
    )
}


