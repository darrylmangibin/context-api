import React, { createContext, useReducer } from "react";
import axios from "../../axios";
import authReducer from "./authReducer";
import {
	REGISTER_USER,
	REGISTER_FAIL,
	AUTH_FAIL,
	AUTH_USER,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} from "../types";

import authToken from "../../utils/authToken";

const initialState = {
	token: null,
	user: null,
	errors: {},
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
		}
	};

	const loginUser = async (data) => {
		try {
			const res = await axios.post("/auth/login", data);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			dispatch(authUser());
		} catch (err) {
			const { errors } = err.response.data;
			dispatch({
				type: LOGIN_FAIL,
				payload: errors,
			});
		}
	};

	const logoutUser = () => {
		dispatch({
			type: LOGOUT,
		});
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
				loginUser,
				logoutUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthState;
