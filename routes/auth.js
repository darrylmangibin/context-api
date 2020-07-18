const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

const router = express.Router();

const errorsToObject = require("../utils/errors");
const User = require("../model/User");

// LOGIN USER
// @route POST
// @access PUBLIC
router.post(
	"/login",
	[
		check("email", "Please enter your valid Email").isEmail(),
		check("password", "Please enter your correct password").exists({
			checkFalsy: true,
		}),
	],
	async (req, res) => {
		const { email, password } = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errorsToObject(errors.array()) });
		}

		const user = await User.findOne({ email });

		if (!user)
			return res
				.status(400)
				.json({ errors: { email: "Email does not exist" } });

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch)
			return res
				.status(400)
				.json({ errors: { password: "Password incorrect" } });

		const payload = {
			user: { id: user.id },
		};

		const token = await jwt.sign(payload, config.get("secretKey"), {
			expiresIn: 36000,
		});

		return res.status(200).json({ token });
	}
);

module.exports = router;
