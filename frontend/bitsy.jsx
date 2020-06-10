import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util.js'
import * as productAPIUtil from './util/product_api_util'
import configureStore from './store/store';
import Root from "./components/root";




document.addEventListener("DOMContentLoaded", () => {
    //Testing
    

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // window.signup = sessionAPIUtil.signup;
    // window.login = sessionAPIUtil.login;
    // window.logout = sessionAPIUtil.logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    window.getAllProducts = productAPIUtil.getAllProducts;
    window.getProduct = productAPIUtil.getProduct;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
});