import {makeStyles, Theme} from "@material-ui/core";
import theme from "../../theme";
import grey from "@material-ui/core/colors/grey";

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        Height: "100vh",
        backgroundColor: "#A9F16C",
    },
    sideBarList: {
        listStyle: "none",
        position: 'sticky',
        top: 0,
        padding: 0,
        margin: 0,
        maxWidth: 200,
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
    postWrapper: {
        color: "inherit",
        textDecoration: "none"
    },
    centralWrapper: {
        height: '100%',
        borderBottom: 0,
        borderTop: 0,
        borderRadius: 0,
    },
    headerCentralWrapper: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
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
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: "flex",
        width: "100%",
    },
    addFormBottom: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 18,
        outline: "none",
        fontFamily: "inherit",
        resize: "none",
        marginLeft: 20,
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: "relative",
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormButton: {
        color: 'rgb(6,60,72)',
        cursor: 'pointer',
        transition: 'background-color 0.1s ease-in-out',
        '&:hover': {
            backgroundColor: 'rgb(159,144,144,0.1)',
        },
    },
    addFormBottomRight: {
        display: "flex",
        alignItems: "center"
    },
    rightSide: {
        position: 'sticky',
        top: 0,
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 10,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockItem: {

        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },

}));