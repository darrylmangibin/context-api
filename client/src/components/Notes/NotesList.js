import React from "react";
import { withRouter } from 'react-router-dom';

import NoteItems from "./NoteItems";
import { Button } from "../common";

const NotesList = ({ history }) => {
	return (
		<div className="container">
			<p className="empty-message">No notes to show</p>
			<NoteItems />
			<Button title="Create Note" onClick={() => history.push("/create")} />
		</div>
	);
};

export default withRouter(NotesList);
