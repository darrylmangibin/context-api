import React, { createContext, useReducer } from "react";
import axios from '../../axios';
import authReducer from "./authReducer";
import { REGISTER_USER, REGISTER_FAIL } from "../types";

const initialState = {
	token: null,
  user: null,
  errors: null
};

export const AuthContext = createContext(initialState);

const AuthState = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const registerUser = async newUser => {
    try {
      const res = await axios.post("/users/register", newUser);
      console.log(res)
    } catch (err) {
      const { errors } = err.response.data;
      dispatch({
        type: REGISTER_FAIL,
        payload: errors
      })
    }
  };

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				user: state.user,
        errors: state.errors,
				registerUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthState;
