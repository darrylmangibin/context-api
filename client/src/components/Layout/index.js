import React, { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Header title="Mern App" subTitle="Mongo Express React Node(Context API)" />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
