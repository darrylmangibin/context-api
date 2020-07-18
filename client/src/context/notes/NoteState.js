import React, { createContext, useReducer } from "react";
import axios from "../../axios";
import { GET_NOTES, ADD_FAIL, ADD_NOTE } from "../types";

import notesReducer from "./notesReducer";

const initialState = {
	notes: [],
	errors: {},
};

export const NotesContext = createContext(initialState);

const NoteState = ({ children }) => {
	const [state, dispatch] = useReducer(notesReducer, initialState);

	const getNotes = async () => {
		try {
			const res = await axios.get("/notes");
			dispatch({
				type: GET_NOTES,
				payload: res.data,
			});
		} catch (err) {
			throw new Error("Note items found");
		}
	};

	const addNote = async (newNote, history) => {
		try {
			const res = await axios.post("/notes", newNote);
			dispatch({
				type: ADD_NOTE,
				payload: res.data,
      });
      history.push("/")
		} catch (err) {
			const { errors } = err.response.data;

			dispatch({
				type: ADD_FAIL,
				payload: errors,
			});
		}
	};

	return (
		<NotesContext.Provider
			value={{
				notes: state.notes,
				errors: state.errors,
				getNotes,
				addNote,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};

export default NoteState;
