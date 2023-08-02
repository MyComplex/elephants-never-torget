/* Import modules */
const express = require('express');

/*  Import notes router for /notes */
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
