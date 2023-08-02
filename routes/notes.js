/* Import modules */
const notes = require('express').Router();
const fs = require('fs');
const fsPromises = require('fs').promises;

/* GET route for all notes */
notes.get('/', (req, res) => {
    fsPromises.readFile('./db/db.json')
    .then((data) => {
        res.json(JSON.parse(data))
    });
});

module.exports = notes;