const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const { connect } = require("./config/database");
require("dotenv").config();

app.use(cors());
const app = express();

app.use(bodyParser.json());
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