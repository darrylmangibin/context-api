import { REGISTER_USER, REGISTER_FAIL, AUTH_FAIL, AUTH_USER } from "../types";

export default (state, { type, payload }) => {
	switch (type) {
		case AUTH_USER:
			return {
				...state,
				user: payload.user,
        isAuthenticated: true,
        token: localStorage.getItem("token")
			};
		case REGISTER_USER:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				token: payload.token,
			};
		case REGISTER_FAIL:
			return {
				...state,
				token: null,
				user: null,
				errors: payload,
				isAuthenticated: false,
			};
		case AUTH_FAIL:
			return {
				...state,
				token: null,
				user: null,
				errors: null,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};
