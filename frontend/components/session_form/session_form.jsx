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
        this.demoUser = this.demoUser.bind(this);
        this.testModal = this.testModal.bind(this);
        this.test2Modal = this.test2Modal.bind(this);
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

    demoUser(e) {
        e.preventDefault;
        const demoUser = {
            email: "jon@gmail.com",
            password: "123456"
        }
        this.props.processForm(demoUser).then(this.props.closeModal);
    }

    componentDidMount(){
        // debugger
        this.props.clearErrors();
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    renderErrors(){

        if (this.props.errors.length !== 0) {
            return(
                <ul>
                    {  this.props.errors.map((error, i) => (
                        <li className="error-notifications" key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )};
    }

    testModal(){
        this.props.openModal('signup');
    }

    test2Modal(){
        this.props.openModal('login');
    }

    render() {
        const signInModal = () => (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                   <div className="login-form-header">
                       <h1 className="sign-in-header">Sign in</h1>
                        <button type="button" className="register-button" onClick={this.testModal}>Register</button>
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
                </form>
                 <div className="bottom-login-form-box">
                    <br />
                        <button type="button" className="demo-button" onClick={this.demoUser}>Demo User</button>
                </div>
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
                </form>
                <div className="bottom-login-form-box">
                        <br />
                        <button type="button" className="demo-button" onClick={this.test2Modal}>Sign in</button>
                 </div>
            </div>
        );

        return this.props.formType === 'sign in' ? signInModal() : registerModal(); 
    }
}

export default SessionForm;