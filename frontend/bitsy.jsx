import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util.js'
import configureStore from './store/store';

window.signup = sessionAPIUtil.signup;
window.login = sessionAPIUtil.login;
window.logout = sessionAPIUtil.logout;


document.addEventListener("DOMContentLoaded", () => {
        
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Bitsy :3</h1>, root)
});