import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";



ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
