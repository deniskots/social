import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useHomeStyles} from "../theme";
import {selectIsPostLoading, selectPostData} from "../../../store/ducks/post/selectors";
import {fetchPostData, setPostData} from "../../../store/ducks/post/actionCreators";
import LinearProgress from "@material-ui/core/LinearProgress";
import classNames from "classnames";
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SaveAltIcon from "@material-ui/icons/SaveAlt";


export const FullPost: React.FC = (): React.ReactElement | null => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const params: {id?: string} = useParams();
    const id = params.id;
    const PostData = useSelector(selectPostData);
    const isLoading = useSelector(selectIsPostLoading);

    React.useEffect(() => {
        if(id) {
            dispatch(fetchPostData(id))
        }
        return () => {
            dispatch(setPostData(undefined))
        }

    }, [dispatch, id])

   if (isLoading) {
       return (<LinearProgress/>)
   };

   if(PostData) {
        return <Paper className={classes.fullPost}>
            <div className={classNames(classes.postsHeaderUser)}>
                <Avatar
                    className={classes.postAvatar}
                    alt={`user-ava ${PostData.user.fullname}`}
                    src={PostData.user.avatarUrl}/>
                    <Typography>
                        <b>{PostData.user.fullname}</b>
                        <div>
                            <span className={classes.userNameNewsFeed}>@{PostData.user.username}</span>
                        </div>
                    </Typography>
            </div>
            <Typography className={classes.fullPostText}>{PostData.text}</Typography>
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
        </Paper>
   }
    return null;
}

