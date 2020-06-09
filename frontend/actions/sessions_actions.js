import * as sessionAPIUtil from '../util/session_api_util.js'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receiveCurrentUser = currentUser => {
    return {type: RECEIVE_CURRENT_USER,
    currentUser}
};

const logoutCurrentUser = () => {
   return {type: LOGOUT_CURRENT_USER}
};
 
const receiveErrors = errors => {
    return {type: RECEIVE_ERRORS,
    errors}
};

const removeErrors = () => {
    return {type: CLEAR_ERRORS}
};


export const login = user => dispatch => {
   return sessionAPIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const logout = () => dispatch => {
   return sessionAPIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
};

export const signup = user => dispatch => {
   return sessionAPIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const clearErrors = () =>dispatch => dispatch(removeErrors());