import React, { useContext } from "react";
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthState';

import { RegisterForm } from "../components/auth/";

const RegistrationPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) return <Redirect to="/" />
	return <RegisterForm />;
};

export default RegistrationPage;
