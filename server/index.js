var express = require('express');
var app = express();

var path = require('path');

const PORT = process.env.PORT ||3000; //serve per far funzionare heroku

// connessione al database
require('./config/db.js');


// REQUIRE DELLE ROTTE DELLA MIA APPLICAZIONE
require('./routes/routes.js')(express, app);

//LIVERELOAD
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(path.join(__dirname, "..", "public"));

app.listen(PORT, function () {
    console.log("http://localhost:3000")
})
