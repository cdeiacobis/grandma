var express = require('express');
var controller = require('./controller.js');

//CREO IL ROUTER TODOS
var todos = express.Router();

// LISTA DI TUTTI I MIEI TODOS
todos.get('/', controller.getAll);

// DETTAGLIO DI UN TODO
todos.get('/:id', controller.getOne);

// LISTA DI TODO filtrati per categoria???????
todos.get('/:categoria', controller.get); 

//CREAZIONE DI UN TODO
todos.post('/', controller.create);

//MODIFICA DI UN TODO
todos.put('/:id', controller.update);

//ELIMINAZIONE DI UN TODO
todos.delete('/:id', controller.deleteOne);

module.exports = todos;