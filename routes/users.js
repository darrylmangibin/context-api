const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrytp = require("bcrypt");
const config = require("config");

const router = express.Router();

const errorsToObject = require("../utils/errors");
const User = require("../model/User");

// REGISTER USER
// @route POST
// @access PUBLIC
router.post(
	"/register",
	[
		check("username", "Please provide your User name").not().isEmpty(),
		check("email", "Please provide a valid Email").isEmail(),
		check(
			"password",
			"Please provide a password with atleast 6 characters"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const { username, email, password } = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errorsToObject(errors.array()),
			});
		}

		let user = await User.findOne({ email });

		if (user)
			return res.status(400).json({ errors: { email: "Email already exist" } });

		user = new User({ username, email, password });

		const salt = await bcrytp.genSalt(10);

		const hash = await bcrytp.hash(user.password, salt);

		user.password = hash;

		const payload = {
			user: { id: user.id },
		};

		const token = await jwt.sign(payload, config.get("secretKey"), {
			expiresIn: 36000,
		});

		try {
			await user.save();
			return res.status(200).json({ token });
		} catch (err) {
			return res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
