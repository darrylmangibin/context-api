import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { NotesContext } from "../../context/notes/NoteState";

import { InputField, TextBox, Button } from "../common";

const NoteForm = ({ history }) => {
	const { addNote, errors } = useContext(NotesContext);

	const [noteFields, setNoteField] = useState({
		title: "",
		description: "",
	});
	const [formErrors, setFormErrors] = useState({});
	const { title, description } = noteFields;

	const handleOnchange = (e) => {
		const { name, value } = e.target;

		setNoteField((prevState) => ({ ...prevState, [name]: value }));

		if (Object.keys(formErrors).length) {
			setFormErrors((prevState) => {
				delete prevState[name];
				return {
					...prevState,
				};
			});
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const newNote = { title, description, updatedAt: Date.now() };

		addNote(newNote, history);
	};

	useEffect(() => {
		setFormErrors(errors);
	}, [errors]);

	return (
		<div className="container">
			<form>
				<InputField
					placeholder="Note title"
					name="title"
					autoComplete="off"
					value={title}
					onChange={handleOnchange}
					error={formErrors.title}
				/>
				<TextBox
					placeholder="Enter note body"
					name="description"
					value={description}
					onChange={handleOnchange}
				/>
				<Button title="Save Note" onClick={handleOnSubmit} />
			</form>
		</div>
	);
};

export default withRouter(NoteForm);
