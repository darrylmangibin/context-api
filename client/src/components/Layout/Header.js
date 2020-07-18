import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ title, subTitle }) => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="header__title">{title}</h1>
				<h2 className="header__subtitle">{subTitle}</h2>
			</div>
			<div className="header__links">
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
				<Link>Logout</Link>
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
