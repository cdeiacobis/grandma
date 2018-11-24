var express = require('express');
var controller = require('./controller.js');

//CREO IL ROUTER proverbi
var proverbi = express.Router();

// LISTA DI TUTTI I MIEI proverbi
proverbi.get('/', controller.getAll);

//LISTA DI TUTTI I CONSIGLI SULL'proverbi PER AUTORE
proverbi.get('/autore/:id', controller.getAllByAuthor);


//CREAZIONE DI UN TODO
proverbi.post('/', controller.create);

//MODIFICA DI UN TODO
proverbi.put('/:id', controller.update);

//ELIMINAZIONE DI UN TODO
proverbi.delete('/:id', controller.deleteOne);

module.exports = proverbi;