import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { NotesContext } from "../../context/notes/NoteState";

import NoteItems from "./NoteItems";
import { Button } from "../common";

const NotesList = ({ history }) => {
	const { notes } = useContext(NotesContext);

	return (
		<div className="container">
			{notes.length > 0 ? (
				notes.map((note) => <NoteItems key={note._id} note={note} />)
			) : (
				<p className="empty-message">No notes to show</p>
			)}
			<Button title="Create Note" onClick={() => history.push("/create")} />
		</div>
	);
};

export default withRouter(NotesList);
