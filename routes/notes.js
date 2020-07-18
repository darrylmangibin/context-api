const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const Note = require("../model/Note");

// GET ITEMS
// @route GET
// @access PRIVATE
router.get("/", auth, async (req, res) => {
	try {
		const notes = await Note.find({ user: req.user.id });
		return res.status(200).json({ data: notes });
	} catch (err) {
		return res.status(400).json({ errors: "Unable to get the data" });
	}
});

// Create ITEM
// @route POST
// @access PRIVATE
router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;
  const errors = {};

  if (!title) return res.status(400).json({ errors: { title: "Please enter a title" } })

	let note = await Note.findOne({ title });

	if (note)
		return res.status(400).json({ errors: { title: "Title already exist" } });

	note = new Note({ title, description, user: req.user.id });

	const newNote = await note.save();

	return res.status(200).json({ data: newNote });
});

// GET ITEM
// @route GET
// @access PRIVATE
router.get("/:id", auth, async (req, res) => {
	try {
		const note = await Note.findById(req.params.id);

		if (!note) return res.status(400).json({ error: "No data found" });

		if (note.user.toString() !== req.user.id)
			return res.status(401).send("Invalid User");

		return res.status(200).json({ data: note });
	} catch (err) {
		return res.status(400).json({ error: "No data found" });
	}
});

// EDIT ITEM
// @route PUT
// @access PRIVATE
router.put("/:id", auth, async (req, res) => {
	const { id } = req.params;
	const { title, description, updatedAt } = req.body;

	const noteFields = {};
	if (title) noteFields.title = title;
	if (description) noteFields.description = description;
	if (updatedAt) noteFields.updatedAt = updatedAt;

	let note = await Note.findById(id);

	if (!note) return res.status(400).json({ errors: { msg: "No data found" } });

	if (note.user.toString() !== req.user.id)
		return res.status(401).send("Invalid User");

	note = await Note.findByIdAndUpdate(id, { $set: noteFields }, { new: true });

	return res.status(200).json({ data: note });
});

// DELETE ITEM
// @route delete
// @access PRIVATE
router.delete("/:id", auth, async (req, res) => {
	const { id } = req.params;

  let note = await Note.findById(id);

	if (!note) return res.status(400).json({ errors: { msg: "No data found" } });

	if (note.user.toString() !== req.user.id)
		return res.status(401).send("Invalid User");

	note = await Note.findByIdAndRemove(id);

	return res.status(200).json({ data: note });
});

module.exports = router;
