var express = require('express');
var controller = require('./controller.js');

//CREO IL ROUTER PULIZIE
var pulizie = express.Router();

// LISTA DI TUTTI I MIEI pulizie
pulizie.get('/', controller.getAll);

//LISTA DI TUTTI I CONSIGLI SULL'pulizie PER AUTORE
pulizie.get('/autore/:id', controller.getAllByAuthor);


//CREAZIONE DI UN TODO
pulizie.post('/', controller.create);

//MODIFICA DI UN TODO
pulizie.put('/:id', controller.update);

//ELIMINAZIONE DI UN TODO
pulizie.delete('/:id', controller.deleteOne);

module.exports = pulizie;