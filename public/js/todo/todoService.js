angular.module('app').service('todoService', function () {

//creo la fx che mi restituisce todos
     var getAll = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/todos'
        });
    }

//creo la fx che mi restituisce todos filtrati per categoria?????? VABENE???
     var getSome = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/todos' + categoria
        });
    }

    var create = function (nuovo) {
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/todos',
            data: nuovo
        });
    }

    var update = function (id, concluso) {
        // todos[indice].fatto = !todos[indice].fatto
        return $http({
            method: 'PUT',
            url: 'http://localhost:3000/todos/' + id,
            data: {
                concluso: !concluso
            }
        });

    }

    var deleteOne = function (id) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3000/todos/' + id
        });
    }

    return {
        getAll: getAll,
        create: create,
        update: update,
        deleteOne: deleteOne
    }
})