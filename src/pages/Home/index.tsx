import React from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import {Post} from "../../components/Post";
import {SideMenu} from "../../components/SideMenu";
import {AddPostForm} from "../../components/AddPostForm";
import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";




export function Index() {
    const classes = useHomeStyles();
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
                        {[
                            ...new Array(20).fill(
                                <Post
                                    text="Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная
                        на каком-либо материальном носителе человеческая мысль;
                        в общем плане связная и полная последовательность символов."
                                    classes={classes}
                                    user={{
                                        fullname: "Myroslav Velychko",
                                        username: "MyroVe",
                                        avatarUrl: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
                                    }}
                                />
                            )
                        ]}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField fullWidth label="Поиск в сети"/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
};

