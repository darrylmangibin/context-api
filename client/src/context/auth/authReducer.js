import {
	REGISTER_USER,
	REGISTER_FAIL,
	AUTH_FAIL,
	AUTH_USER,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} from "../types";

export default (state, { type, payload }) => {
	switch (type) {
		case AUTH_USER:
			return {
				...state,
				user: payload.user,
				isAuthenticated: true,
				token: localStorage.getItem("token"),
			};
		case LOGIN_FAIL:
			return {
				...state,
				isAuthenticated: false,
				errors: payload,
			};
		case REGISTER_USER:
    case LOGIN_SUCCESS:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				token: payload.token,
				errors: {},
			};
		case REGISTER_FAIL:
			return {
				...state,
				token: null,
				user: null,
				errors: payload,
				isAuthenticated: false,
			};
		case LOGOUT:
    case AUTH_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				errors: {},
				isAuthenticated: false,
			};
		default:
			return state;
	}
};
