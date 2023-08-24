/* Greetings */
console.log('Hello world!');

/* Import modules */
const express = require('express');
const path = require('path');

/* Import routes */
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

/* Middleware to parse JSON data */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

/* Set the location of the public web files */
app.use(express.static('public'));

/* GET route to homepage */
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

/* GET route to notes page */
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

/* GET wildcard that returns to homepage */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

/* Start server and listen on port */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`)
});