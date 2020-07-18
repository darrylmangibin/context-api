import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ title, secondary, ...props }) => {
	return (
		<button
			className={classnames("button", {
				"button--secondary": secondary,
			})}
			{...props}
		>
			{title}
		</button>
	);
};

Button.defaultProps = {
	secondary: false,
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
};

export default Button;
