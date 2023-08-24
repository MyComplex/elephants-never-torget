/* Import modules */
const notes = require('express').Router();
const crypto = require('crypto');
const fs = require('fs');
const fsPromises = require('fs').promises;

/* GET route for all notes */
notes.get('/', (req, res) => {
    fsPromises.readFile('./db/db.json')
        .then((data) => {
            res.json(JSON.parse(data))
        });
});

/* POST route to add a new note */
notes.post('/', (req, res) => {
    const readNotes = fs.readFileSync('./db/db.json', 'utf-8')
    const notesArray = JSON.parse(readNotes);
    const newNote = req.body;
    newNote.id = crypto.randomUUID().toString();

    notesArray.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesArray));

    res.json({
        message: 'A new note has been added!'
    })
});

/* DELETE route to destroy a note */
notes.delete('/:id', (req, res) => {
    const readNotes = fs.readFileSync('./db/db.json', 'utf-8')
    let notesArray = JSON.parse(readNotes);

    notesArray = notesArray.filter((note) => note.id !== req.params.id);

    fs.writeFileSync('./db/db.json', JSON.stringify(notesArray));

    res.json({
        message: 'The selected note has been deleted!'
    })
});

module.exports = notes;
