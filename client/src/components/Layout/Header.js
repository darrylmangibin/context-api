import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subTitle }) => {
	return (
		<header className="header">
			<div className="container">
				<h1 className="header__title">{title}</h1>
				<h2 className="header__subtitle">{subTitle}</h2>
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
