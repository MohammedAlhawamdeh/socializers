const dotenv = require('dotenv')
const express = require("express");
const courses = require("./data/courses.js");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((p) => p._id === req.params.id);
  res.json(course);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
