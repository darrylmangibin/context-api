import React, { createContext, useReducer } from "react";
import axios from "../../axios";
import authReducer from "./authReducer";
import { REGISTER_USER, REGISTER_FAIL, AUTH_FAIL, AUTH_USER } from "../types";

import authToken from "../../utils/authToken";

const initialState = {
	token: null,
	user: null,
	errors: null,
	isAuthenticated: false,
};

export const AuthContext = createContext(initialState);

const AuthState = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const authUser = async () => {
		const token = localStorage.getItem("token");
		authToken(token);
		try {
			const res = await axios.get("/auth");
			dispatch({
				type: AUTH_USER,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: AUTH_FAIL,
			});
		}
	};

	const registerUser = async (newUser) => {
		try {
			const res = await axios.post("/users/register", newUser);
			console.log(res);
			dispatch({
				type: REGISTER_USER,
				payload: res.data,
			});
			dispatch(authUser());
		} catch (err) {
			const { errors } = err.response.data;
			dispatch({
				type: REGISTER_FAIL,
				payload: errors,
			});
			dispatch(authUser());
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				user: state.user,
				errors: state.errors,
        isAuthenticated: state.isAuthenticated,
				registerUser,
				authUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthState;
