const express = require('express')
const courses = require('./data/courses')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/courses', (req, res) => {
  res.json(courses)
})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((p) => p._id === req.params.id)
  res.json(course)
})

app.listen(5000, console.log('Server running on port 5000'))