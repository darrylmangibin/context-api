import React from "react";
import { Route, Switch } from "react-router-dom";

import AddNotePage from "./AddNotePage";
import NotesPage from "./NotesPage";
import PageNotFound from '../../pages/PageNotFound';
import EditNotePage from "./EditNotePage";

const MainPage = (props) => {
	return (
		<Switch>
			<Route path="/" exact component={NotesPage} />
			<Route path="/create" exact component={AddNotePage} />
      <Route path="/edit/:id" exact component={EditNotePage} />
      <Route path="/" component={PageNotFound} />
		</Switch>
	);
};

export default MainPage;
