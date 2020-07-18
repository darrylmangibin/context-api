import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth/AuthState";

import { InputField, Button } from "../common";

const RegisterForm = () => {
	const authContext = useContext(AuthContext);
	const { registerUser, errors } = authContext;

	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [formErrors, setFormErrors] = useState({});
	const { username, email, password } = user;

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
		if (Object.keys(formErrors).length) {
			setFormErrors((prevState) => {
				delete prevState[name];
				return { ...prevState };
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    registerUser(user);
	};

	useEffect(() => {
		if (errors) {
			setFormErrors(errors);
		}
	}, [errors]);

	return (
		<div className="container">
			<h2 style={styles.heading}>Register</h2>
			<form>
				<InputField
					title="User Name"
					name="username"
					placeholder="Username"
					value={username}
					onChange={handleOnChange}
					autoComplete="off"
					error={formErrors.username}
				/>
				<InputField
					title="Email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={handleOnChange}
					autoComplete="off"
					error={formErrors.email}
				/>
				<InputField
					title="Password"
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={handleOnChange}
					autoComplete="off"
					error={formErrors.password}
				/>
				<Button title="Register" onClick={handleSubmit} />
			</form>
		</div>
	);
};

const styles = {
	heading: {
		margin: "40px 0",
		textAlign: "center",
	},
};

export default RegisterForm;
