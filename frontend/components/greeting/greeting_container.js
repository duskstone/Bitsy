import { connect } from "react-redux"
import Greeting from "./greeting"
import { logout } from "../../util/session_api_util.js"

const mSTP = ({ entities: { users }, session }) => ({
    currentUser: users[session.id] 
});
// debugger
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);