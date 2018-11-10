var express = require('express');
var controller = require('./controller.js');

//CREO IL ROUTER ORTO
var ricette = express.Router();

// LISTA DI TUTTI I MIEI orto
ricette.get('/', controller.getAll);

// LISTA DI TUTTI I MIEI orto
ricette.get('/autore/:id', controller.getAllByAuthor);


//CREAZIONE DI UN RICETTE
ricette.post('/', controller.create);

//MODIFICA DI UN RICETTE
ricette.put('/:id', controller.update);

//ELIMINAZIONE DI UN RICETTE
ricette.delete('/:id', controller.deleteOne);

module.exports = ricette;