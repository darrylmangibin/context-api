import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/auth/AuthState";

import NotesPage from "./pages/NotesPage/";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/Layout/";
import PrivateRoute from './components/routes/PrivateRoute';

import "./styles/main.css";

const App = () => {
  const { authUser } = useContext(AuthContext); 

  useEffect(() => {
    authUser()
  }, [])
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/login" exact component={LoginPage} />
					<Route path="/register" exact component={RegistrationPage} />
					<Route path="/about" exact component={AboutPage} />
					<PrivateRoute component={NotesPage} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
