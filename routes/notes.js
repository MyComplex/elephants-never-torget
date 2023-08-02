/* Import modules */
const notes = require('express').Router();

/* GET route for all notes */
notes.get('/', (req, res) => {
    readFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});