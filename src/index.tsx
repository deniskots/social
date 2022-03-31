import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
import {Provider} from "react-redux";
import {store} from "./store/store";



ReactDOM.render(
    <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MuiThemeProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
