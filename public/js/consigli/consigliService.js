angular.module('app').service('consigliService', function ($http) {

    //creo la fx che mi restituisce todos filtrati per categoria
    var getConsigli = function (categoria) {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/' + categoria
        });
    }

    var create = function (nuovo, categoria) {
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/' + categoria,
            data: nuovo
        });
    }

    var update = function (id, categoria, aggiornato) {

        return $http({
            method: 'PUT',
            url: 'http://localhost:3000/' + categoria + '/' + id,
            data: aggiornato
        });

    }

    var deleteOne = function (id, categoria) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3000/' + categoria + '/' + id
        });
    }

    return {
        getConsigli: getConsigli,
        //getConsigli per autore
        create: create,
        update: update,
        deleteOne: deleteOne
    }
})