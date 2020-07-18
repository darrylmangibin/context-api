import React, { useContext } from "react";
import { Redirect } from 'react-router-dom';
import { AuthContext } from "../context/auth/AuthState";

import { LoginForm } from "../components/auth";

const LoginPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) return <Redirect to="/" />
	return <LoginForm />;
};

export default LoginPage;
