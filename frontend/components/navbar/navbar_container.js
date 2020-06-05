import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/sessions_actions.js";

const mSTP = ({ entities: { users }, session }) => ({
    currentUser: users[session.id] 
});
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);