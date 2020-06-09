import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: ""
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
        this.props.processForm(user).then(this.props.closeModal);
            // .then( () => dispatch(this.props.closeModal()))
    }

    // handleClick(f) {
    //     f.preventDefault();
    //     const modal = "signup";
    //     this.props.otherForm(modal);
    // }

    loginDemoUser() {
        const demoUser = this.setState({
            email: "jon@gmail.com",
            password: "123456"
        })

        this.handleSubmit(demoUser)
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
                        <button type="button" className="register-button" onClick={ () => this.props.openModal('signup')}>Register</button>
                   </div> 
                   
          <br />
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
                        <br />
                        <div className="session-submit-contain session-submit-contain-login">
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
                        <button type="button" className="demo-button" onClick={() => this.loginDemoUser()}>Demo User</button>
                    </div>
                </form>
            </div>
        );

        const registerModal = () => (
            <div className="sign-up-form-container">
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <div className="top-header-sents">
                        <h1 className="sign-up-form-title">Create your account</h1>
                        <h2 className="top-header-bottom-sent">Registration is easy.</h2>
                    </div>
                    <br />
                    {this.renderErrors()}
                    <div className="sign-up-form-inputs-container">
                        <label className="label-title">Email address</label>
                        <div className="email-input">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input sign-up-email-input"
                            />
                        </div>
                        <br />
                        <label className="label-title">First name</label>
                        <div className="first-name-input sign-up-first-input">
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                className="login-input first-name-input-mini"
                            />
                        </div>
                        <br />
                        <label className="label-title">Password</label>
                        <div className="password-input">
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input sign-up-pass-input"
                            />
                        </div>
                    </div>
                    <div className="session-submit-contain-signup">
                        <input className="session-submit session-submit-register" type="submit" value="Register" />
                    </div>
                    <div className="or-section">
                        <hr className="hr-line" />
                    </div>
                    <div className="bottom-login-form-box">
                        <br />
                        <button type="button" className="demo-button" onClick={() => this.props.openModal('login')}>Sign in</button>
                    </div>
                </form>
            </div>
        );

        return this.props.formType === 'sign in' ? signInModal() : registerModal(); 
    }
}

export default SessionForm;