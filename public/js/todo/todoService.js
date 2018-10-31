angular.module('app').service('todoService', function () {


    //creo la fx che mi restituisce todos
    var getAll = function () {
        return todos;
    }

    var create = function (nuovo) {
        todos.unshift(nuovo);
    }

    var update = function (indice) {
        todos[indice].fatto = !todos[indice].fatto
    }

    var deleteOne = function (indice) {
        todos.splice(indice, 1);
    }

    return {
        getAll: getAll,
        create: create,
        update: update,
        deleteOne: deleteOne
    }
})