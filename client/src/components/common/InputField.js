import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputField = ({ placeholder, title, className, error, ...props }) => {
	return (
		<div style={{ marginTop: "2.4rem" }}>
			<strong style={styles.inline}>{title}</strong>
			<span style={{ marginLeft: 30, color: "red" }}>{error}</span>
			<input
				style={(props.style, styles.noMarginTop)}
				className={classnames("title-input", {
					[className]: className,
				})}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	);
};

InputField.defaultProps = {
	placeholder: "",
	title: "",
	className: "",
	error: null,
};

InputField.propTypes = {
	placeholder: PropTypes.string,
	title: PropTypes.string,
	style: PropTypes.shape(Object),
	className: PropTypes.string,
	error: PropTypes.string,
};

const styles = {
	inline: {
		display: "inline-block",
	},
	noMarginTop: {
		marginTop: 0,
	},
};

export default InputField;
