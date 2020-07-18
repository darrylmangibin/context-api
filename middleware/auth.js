const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async (req, res, next) => {
	const token = req.header("x-auth-token");

	if (!token) return res.status(401).send("No token, Unauthorized");

	try {
		const decoded = await jwt.verify(token, config.get("secretKey"));
		req.user = decoded.user;
		next();
	} catch (err) {
		console.log(err.message);
		return res.status(401).send("Unauthorized");
	}
};
