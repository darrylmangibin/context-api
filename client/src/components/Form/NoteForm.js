import React from "react";

import { InputField, TextBox, Button } from "../common";

const NoteForm = () => {
	return (
		<div className="container">
			<form>
				<InputField placeholder="Note title" />
				<TextBox placeholder="Enter note body" />
				<Button title="Save Note" />
			</form>
		</div>
	);
};

export default NoteForm;
