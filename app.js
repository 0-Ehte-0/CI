const express = require('express');
const app = express();

app.get('/', (req, res) => {
       res.send('Doesnt Work on my machine.');
});

module.exports = app;