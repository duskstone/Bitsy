import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/sessions_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';



const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'register',
        navLink: <Link to="signup">How about signing in?</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Sign in
            </button>
        ),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: modal => dispatch(closeModal(modal)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mSTP, mDTP)(SessionForm);