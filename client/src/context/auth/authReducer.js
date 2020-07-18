import { REGISTER_USER, REGISTER_FAIL, AUTH_FAIL, AUTH_USER, LOGIN_FAIL, LOGIN_SUCCESS } from "../types";

export default (state, { type, payload }) => {
	switch (type) {
		case AUTH_USER:
			return {
				...state,
				user: payload.user,
        isAuthenticated: true,
        token: localStorage.getItem("token")
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        errors: payload
      }
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
				errors: {},
				isAuthenticated: false,
      };
		default:
			return state;
	}
};
