const express = require("express");
const morgan = require("morgan");
const indexRoutes = require("./routes/index.routes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(indexRoutes);

module.exports = app;
