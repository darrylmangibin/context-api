const { param } = require("../routes/auth");

module.exports = (errors) =>
	errors.reduce((acc, val) => ({ ...acc, [val.param]: val.msg }), {});
