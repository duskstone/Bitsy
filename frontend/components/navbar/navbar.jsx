import React from "react";
// import { Link } from "react-router-dom";
import { cartIcon } from "../../../app/assets/images//icons"

const NavBar = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="right-nav-items">
            <nav className="login-signup">
                <button className="sign-in-button" onClick={() => openModal('login')}>Sign in</button>
            </nav>
            <button className="cart-button">
                <span className="cart-button-span">
                    <div className="cart-icon">
                        { cartIcon }
                    </div>
                </span>
            </button>   
        </div>
        
    );
    const personalGreeting = () => (
        <div className="right-nav-items">
            {/* <h2 className="header-name">Hiya, {currentUser.email}</h2> */}
            <nav className="login-signup">
                <button className="logout-button" onClick={logout}>Log Out</button>
            </nav>
            
            <button className="cart-button">
                <span className="cart-button-span">
                    <div className="cart-icon">
                        {cartIcon}
                    </div>
                </span>
            </button>   
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};   

export default NavBar;