// @ts-nocheck

import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const theme = createTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ],
    },
    palette: {
        primary: {
            main: 'rgb(6,60,72)',
            dark: 'rgb(11,12,12)',
            contrastText: '#fff',
        },
        secondary: {
            main: 'rgb(26, 145, 218)',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#111111',
        },
        action: {
            disabledBackground: 'rgb(153 216 255)',
            disabled: '#fff',
        },
    },
    shadows: [],
    overrides: {
        Button: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 700,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgb(29, 161, 243)',
            },
        },
        FilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px',
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: '2px',
                },
            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)',
            },
        },
        Dialog: {
            paper: {
                borderRadius: 15,
            },
        },
        DialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        DialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 214, 221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& button': {
                    padding: 8,
                    marginRight: 20,
                },
            },
        },
    },
});

export default theme;
