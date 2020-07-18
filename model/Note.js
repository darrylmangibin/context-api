const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const Note = mongoose.model("note", NoteSchema);

module.exports = Note;
