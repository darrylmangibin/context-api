import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotesPage from "./pages/NotesPage/";
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AboutPage from './pages/AboutPage';

import "./styles/main.css";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login" exact component={LoginPage} />
				<Route path="/register" exact component={RegistrationPage} />
        <Route path="/about" exact component={AboutPage} />
				<Route component={NotesPage} />
			</Switch>
		</Router>
	);
};

export default App;
