import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route } from "react-router-dom"
import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <header className="main-app-header">
            <h1 className="header-logo">Bitsy :3</h1>
            <NavBarContainer />
        </header>
        
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;