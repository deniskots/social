import React from "react";
import {
    Container,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    TextField,
    Typography,
    withStyles
} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";
import theme from "../theme";


export const useHomeStyles = makeStyles(() => ({
    wrapper: {
        Height: "100vh",
    },
    sideBarList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        width: 200,
    },
    sideBarListItem: {
        '& div': {
            display: "inline-flex",
            alignItems: "center",
            borderRadius: 25,
            padding: '0 25px 0 20px',
            height: 50,
            color: 'rgb(6,60,72)',
            cursor: 'pointer',
            transition: 'background-color 0.1s ease-in-out',
            '&:hover': {
                backgroundColor: 'rgb(159,144,144,0.1)',
            },
        },
    },
    sideMenuButton: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        borderRadius: 30,

    },
    sideBarListItemLabel: {
        fontWeight: 500,
        fontSize: 18,
        marginLeft: 8,
    },
    centralWrapper: {
        height: '100%',
        borderBottom: 0,
        borderTop: 0,
        borderRadius: 0,
    },
    headerCentralWrapper: {
        borderTop: 0,
        borderRadius: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: "10px 15px",
        "& h5": {
            fontWeight: 700,
        },
    },
    footerCentralWrapper: {
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        left: -13

    },
    userNameNewsFeed: {
        color: grey[500],
    },

}));

const SearchTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'rgb(26, 145, 218)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(26, 145, 218)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(26, 145, 218)',
            },
        },
    },
})(TextField);


export function Home() {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu
                        classes={classes}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.centralWrapper} variant={"outlined"}>
                        <Paper className={classes.headerCentralWrapper} variant="outlined">
                            <Typography variant="h5">
                                Главная
                            </Typography>
                        </Paper>
                        {[
                            ...new Array(10).fill(
                                <Tweet
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
                    <SearchTextField fullWidth label="Поиск в сети"/>
                </Grid>
            </Grid>
        </Container>
    )
};

