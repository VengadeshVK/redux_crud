import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from "./redux/store";
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>
    , document.querySelector("#root"));