var express = require('express');
var controller = require('./controller.js');

//CREO IL ROUTER PULIZIE
var pulizie = express.Router();

// LISTA DI TUTTI I CONSIGLI SULLE PULIZIE
pulizie.get('/', controller.getAll);

//LISTA DI TUTTI I CONSIGLI SULLE PULIZIE PER AUTORE
pulizie.get('/autore/:id', controller.getAllByAuthor);


//CREAZIONE DI PULIZIE
pulizie.post('/', controller.create);

//MODIFICA DI PULIZIE
pulizie.put('/:id', controller.update);

//ELIMINAZIONE DI PULIZIE
pulizie.delete('/:id', controller.deleteOne);

module.exports = pulizie;