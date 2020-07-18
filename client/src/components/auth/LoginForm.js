import React, { useState } from "react";

import { InputField, Button } from "../common";

const LoginForm = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const { email, password } = user;

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

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
				/>
				<InputField
					title="Password"
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={handleOnChange}
					autoComplete="off"
				/>
				<Button title="Login" />
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
