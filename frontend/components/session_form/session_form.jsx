import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then( () => dispatch(this.props.closeModal()))
    }

    // handleClick(f) {
    //     f.preventDefault();
    //     const modal = "signup";
    //     this.props.otherForm(modal);
    // }

    loginDemoUser() {
        this.setState({
            email: "jon@gmail.com",
            password: "123456"
        })
    }
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signInModal = () => (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                   <div className="login-form-header">
                       <h1 className="sign-in-header">Sign in</h1>
                        <button type="button" className="register-button">Register</button>
                   </div> 
                   
          <br />
         {/* Pwease {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                    <div className="input-boxes">
                        <label className="label-title">Email address</label>
                            <div className="email-input">
                                <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                />
                            </div>
                        <br />
                        <label className="label-title">Password</label>
                            <div className="password-input"> 
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                />
                            </div>
                        </div>
                        <div className="sign-options">
                                <li className="stay-signed-in">Stay Signed in</li>
                                <li className="forgot-pass">Forgot you password?</li>
                        </div>
                        <br />
                        <div className="session-submit-contain">
                            <input className="session-submit" type="submit" value="Sign in" />
                        </div>
                        <div className="or-section">
                           <hr className="hr-line"/>
                        </div>
                        {/* <div>
                            <hr className="or-line"/>
                            <span>OR</span>
                        </div>
                        */}
                    </div>
                    <div className="bottom-login-form-box">
                    <br />
                        <button type="button" className="demo-button" onClick={this.loginDemoUser}>Demo User</button>
                    </div>
                </form>
            </div>
        );

        const registerModal = () => (
            <h1>I work </h1>
        );

        return this.props.formType === 'sign in' ? signInModal() : registerModal(); 
    }
}

export default SessionForm;