import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { login } from '../../actions/sessions_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'sign in',
        // navLink: <Link to="signup">How about signing up?</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Register
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm);