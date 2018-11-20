const express = require('express')
const app = express()
const port = 3021
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port)