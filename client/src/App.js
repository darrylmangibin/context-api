import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/auth/AuthState";
import NoteState from "./context/notes/NoteState";

import NotesPage from "./pages/NotesPage/";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/Layout/";
import PrivateRoute from "./components/routes/PrivateRoute";

import authToken from './utils/authToken'
import "./styles/main.css";

const token = localStorage.getItem("token");

if (token) {
  authToken(token)
}

const App = () => {
	const { authUser } = useContext(AuthContext);

	useEffect(() => {
		authUser();
	}, []);
	return (
		<Router>
			<NoteState>
				<Layout>
					<Switch>
						<Route path="/login" exact component={LoginPage} />
						<Route path="/register" exact component={RegistrationPage} />
						<Route path="/about" exact component={AboutPage} />
						<PrivateRoute component={NotesPage} />
					</Switch>
				</Layout>
			</NoteState>
		</Router>
	);
};

export default App;
