const express = require('express')
const app = express()

// Use the PORT environment variable or default to 5000
const PORT = process.env.PORT || 5002

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend is running!')
})

// Bind the server to the PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
