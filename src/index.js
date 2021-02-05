import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import configureStore from "./redux";
import App from './app';
import "./index.scss";

const rootEl = document.getElementById('app');

const store = configureStore();

render(<Provider store={store}>
    <App />
</Provider>, rootEl);
