var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

// connessione al database
require('./config/db.js');


// REQUIRE DELLE ROTTE DELLA MIA APPLICAZIONE
require('./routes/routes.js')(express, app);

//LIVERELOAD
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(path.join(__dirname, "..", "public"));

app.listen(3000, function () {
    console.log("http://localhost:3000")
})
