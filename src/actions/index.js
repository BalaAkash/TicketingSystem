import { LOGIN, LOGOUT } from "./type";

import history from "../history";

export const login = userdata => dispatch => {
    dispatch({ type: LOGIN, payload: userdata });
    history.push("/home");
};
