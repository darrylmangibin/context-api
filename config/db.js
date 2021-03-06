const mongoose = require("mongoose");
const config = require("config");

const db = async () => {
	try {
		await mongoose.connect(config.get("mongoURI"), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log("MongoDB connected");
	} catch (e) {
		console.log("Connection faled");
	}
};

module.exports = db;
