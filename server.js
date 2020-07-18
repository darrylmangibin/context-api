const express = require("express");

const app = express();

require("./config/db")();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

const PORT = process.env.PORT || 5000;

app.listen(() => console.log(`Server running at port ${PORT}`));
