const express = require("express");
const cookieParser = require("cookie-parser");
const { connect } = require("./config/database");
require("dotenv").config();

const app = express();

const PORT = process.env.Port || 5000;
app.use(express.json());


app.use(cookieParser());
const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

connect();

app.get("/", (req, res) => {
    res.send(`<h1> This is home page </h1>`)
})