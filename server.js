const express = require("express");

const app = express();

require("./config/db")();

const PORT = process.env.PORT || 5000;

app.listen(() => console.log(`Server running at port ${PORT}`));
