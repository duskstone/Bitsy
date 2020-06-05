import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route } from "react-router-dom"
import { AuthRoute } from '../util/route_util';
import SearchBarContainer from "./searchbar/searchbar";
import Catergories from "./catergories/catergories";
import MainContentContainer from "./maincontent/main-content";
import FooterContent from "./footercontent/footer-content";
import { Link } from 'react-router-dom';
const App = () => (
    <div>
        <div className="event-header">
            <Link to="event=shop">Discover handcrafted and vintage pixel creations from GameDev-owned shops on Bitsy</Link>
        </div>
        <header className="main-app-header">
            <h1 className="header-logo">Bitsy :3</h1>
            <SearchBarContainer />
            <NavBarContainer />
        </header>
        <div className="catergories">
            <Catergories />
        </div>
        <div>
            <MainContentContainer />
        </div>
        <div>
            <FooterContent />
        </div>
        
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;