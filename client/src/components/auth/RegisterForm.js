import React, { useState } from "react";

import { InputField, Button } from "../common";

const RegisterForm = () => {
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
	});
	const { username, email, password } = user;

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<div class="container">
			<h2 style={styles.heading}>Register</h2>
			<form>
				<InputField
					title="User Name"
					name="username"
					placeholder="Username"
					value={username}
					onChange={handleOnChange}
					autoComplete="off"
				/>
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
				<Button title="Register" />
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
