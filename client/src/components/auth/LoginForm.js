import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth/AuthState";

import { InputField, Button } from "../common";

const LoginForm = () => {
	const { loginUser, errors } = useContext(AuthContext);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [formErrors, setFormErrors] = useState({});
	const { email, password } = user;

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
		loginUser(user);
	};

	useEffect(() => {
		setFormErrors(errors);
	}, [errors]);

	console.log(formErrors);

	return (
		<div className="container">
			<h2 style={styles.heading}>Login</h2>
			<form>
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
				<Button title="Login" onClick={handleSubmit} />
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

export default LoginForm;
