import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/auth/AuthState";

const Header = ({ title, subTitle }) => {
	const { logoutUser, isAuthenticated } = useContext(AuthContext);

	return (
		<header className="header">
			<div className="container">
				<h1 className="header__title">{title}</h1>
				<h2 className="header__subtitle">{subTitle}</h2>
			</div>
			<div className="header__links">
				{isAuthenticated ? (
					<button onClick={logoutUser}>Logout</button>
				) : (
					<Fragment>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</Fragment>
				)}
			</div>
		</header>
	);
};

Header.defaultProps = {
	title: "React APP",
	subTitle: "React context",
};

Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

export default Header;
