import { LOGIN, LOGOUT } from "../actions/type";

const INITIAL_STATE = {
    isSignedIn: null,
    userdata: null
};

const Authreducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isSignedIn: true, userdata: action.payload };
        case LOGOUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};

export default Authreducer;
