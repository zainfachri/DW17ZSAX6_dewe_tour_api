require("dotenv").config();

const express = require("express");
const app = express();
const port = 5001;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const router = require("./routes/route");

app.use("/api/v1", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
