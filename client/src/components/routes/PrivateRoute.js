import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthState";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<Route
      { ...rest }
			render={(props) => {
				console.log(rest);
				console.log(props);
				if (isAuthenticated) {
					return <Component {...props} />;
				}
        return <Redirect to="/login" />
			}}
		/>
	);
};

export default PrivateRoute;
