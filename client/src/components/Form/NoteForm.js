import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { NotesContext } from "../../context/notes/NoteState";

import { InputField, TextBox, Button } from "../common";

const NoteForm = ({ history, match }) => {
	const { addNote, errors, getNote, note, clearNote } = useContext(
		NotesContext
	);

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
		if (Object.keys(errors).length) {
			setFormErrors(errors);
		}

		if (match.params.id) {
			getNote(match.params.id);
		}
		return () => {
			clearNote();
		};
	}, [errors, match.params.id]);

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
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<Button title="Save Note" onClick={handleOnSubmit} />
					{note && <Button title="Delete Note" secondary />}
				</div>
			</form>
		</div>
	);
};

export default withRouter(NoteForm);
