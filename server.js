const express = require("express");
const cors = require("cors");

const app = express();

app.options("*", cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./config/db")();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
