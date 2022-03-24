import React from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import {Post} from "../../components/Post";
import {SideMenu} from "../../components/SideMenu";
import {AddPostForm} from "../../components/AddPostForm";
import {useHomeStyles} from "./theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/ducks/posts/actionCreators";
import {fetchTags} from "../../store/tags/actionCreators";
import {selectIsPostsLoading, selectPostsItems} from "../../store/ducks/posts/selectors";
import {Routes, Route, Outlet} from "react-router-dom";
import {SearchTextField} from "../../components/SearchTextField";
import {Tags} from "../../components/Tags";


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
                            <Typography variant="h5">
                                Главная
                            </Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <AddPostForm classes={classes}/>
                            </div>
                            <div className={classes.addFormBottomLine}/>
                        </Paper>
                                {isLoading ? (<LinearProgress/>) : (posts.map(post =>
                                    <Post {...post} classes={classes} key={post._id}/>
                                ))}

                        {/*<Routes>*/}
                        {/*    <Route path="home">*/}
                        {/*        {isLoading ? (<LinearProgress/>) : (posts.map(post =>*/}
                        {/*            <Post {...post} classes={classes} key={post._id}/>*/}
                        {/*        ))}*/}
                        {/*    </Route>*/}
                        {/*</Routes>*/}
                        {/*<Outlet/>*/}
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

