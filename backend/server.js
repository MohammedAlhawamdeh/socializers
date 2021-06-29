const dotenv = require('dotenv')
const express = require("express");
const connectDB = require('./config/db')
const courses = require("./data/courses.js");

const app = express();
dotenv.config();
connectDB()

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
  console.log(`Server running in ${process.env.PORT} mode on port ${PORT}`)
);
