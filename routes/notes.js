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
		return res.status(400).json({ errors: "Unable to get the data" })
	}
});

module.exports = router;
