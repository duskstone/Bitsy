import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Sign in</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hiya, {currentUser.email}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};   

export default NavBar;