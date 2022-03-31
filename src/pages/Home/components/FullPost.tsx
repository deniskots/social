import React from 'react';
import {Post} from "../../../components/Post";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useHomeStyles} from "../theme";
import {selectIsPostLoading, selectPostData} from "../../../store/ducks/post/selectors";
import {fetchPostData, setPostData} from "../../../store/ducks/post/actionCreators";
import LinearProgress from "@material-ui/core/LinearProgress";

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
        return <Post classes={classes} {...PostData}/>
   }

    return null;
}

