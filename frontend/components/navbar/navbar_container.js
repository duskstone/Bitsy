import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/sessions_actions.js";
import { openModal } from '../../actions/modal_actions';

const mSTP = ({ entities: { users }, session }) => ({
    currentUser: users[session.id] 
});
const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(NavBar);