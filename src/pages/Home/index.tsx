import React from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import {Post} from "../../components/Post";
import {SideMenu} from "../../components/SideMenu";
import {AddPostForm} from "../../components/AddPostForm";
import {useHomeStyles} from "./theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/ducks/posts/actionCreators";
import {selectPostsItems} from "../../store/ducks/posts/selectors";




export function Index() {
    const classes = useHomeStyles();

    const dispatch = useDispatch();
    const posts = useSelector(selectPostsItems);

    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchPosts());
    },[dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                {/*<Grid item xs={3}>*/}
                {/*    <div className={classes.rightSide}>*/}
                {/*        <SearchTextField fullWidth label="Поиск в сети"/>*/}
                {/*    </div>*/}
                {/*</Grid>*/}
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={9}>
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
                        {[
                            posts.map(post =>
                                <Post
                                    classes={classes}
                                    key={post._id}
                                    text={post.text}
                                    user={post.user}
                                />
                            )
                        ]}
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )
}

