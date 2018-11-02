var express = require('express');
var controller = require('./controller.js');

//CREO IL ROUTER ORTO
var orto = express.Router();

// LISTA DI TUTTI I MIEI orto
orto.get('/', controller.getAll);


//CREAZIONE DI UN TODO
orto.post('/', controller.create);

//MODIFICA DI UN TODO
orto.put('/:id', controller.update);

//ELIMINAZIONE DI UN TODO
orto.delete('/:id', controller.deleteOne);

module.exports = orto;