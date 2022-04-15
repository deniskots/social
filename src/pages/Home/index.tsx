import React from "react";
import {Route} from "react-router-dom";

import {Container, Grid, Paper, Typography} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';



import {SideMenu} from "../../components/SideMenu";
import {AddPostForm} from "../../components/AddPostForm";
import {Tags} from "../../components/Tags";
import {SearchTextField} from "../../components/SearchTextField";

import {useHomeStyles} from "./theme";

import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/ducks/posts/actionCreators";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {selectIsPostsLoading, selectPostsItems} from "../../store/ducks/posts/selectors";
import {BackBtn} from "../../components/BackBtn";
import {FullPost} from "./components/FullPost";
import {Post} from "../../components/Post";




export function Index() {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const posts = useSelector(selectPostsItems);
    const isLoading = useSelector(selectIsPostsLoading);


    React.useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchTags());

    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.centralWrapper} variant={"outlined"}>
                        <Paper className={classes.headerCentralWrapper} variant="outlined">
                            <Route path="/home/:any">
                                <BackBtn/>
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant="h5">
                                    Публикации
                                </Typography>
                            </Route>
                            <Route path="/home/post">
                                <Typography variant="h5">
                                    Опубликовать
                                </Typography>
                            </Route>

                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddPostForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>
                        </Route>
                        <Route path="/home" exact >
                            {isLoading ? (<LinearProgress/>) : (posts.map(post =>
                                <Post {...post} classes={classes} key={post._id}/>
                            ))}
                        </Route>
                        <Route path="/home/post/:id" component={FullPost} exact/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField fullWidth label="Поиск в сети"/>
                                <Tags classes={classes}/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

