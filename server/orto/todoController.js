angular.module('app').controller('todoController', function ($scope, todoService) {

    //DEFINIAMO TUTTA LA LOGICA DEL NOSTRO CONTROLLER


    //recupero i TODO
    // $scope.todos = todoService.getAll();
    todoService.getAll()
        .then(function (res) {
            $scope.todos = res.data;
        })
        .catch(function (err) {
            console.log(err);
        });


        //VOGLIO RECUPERARE I TO DO FILTRATI PER CATEGORIA ????????????????????????? COME SI FA????????
         $scope.getSometodo = function (categoria){
        
       todoService.getAll(categoria)
            .then(function (res) {
                return todoService.getAll();
            })
            .then(function (res) {
                $scope.todo = res.categoria;
            })
            .catch(function (err) {
                console.log(err)
            });
    }


    //questa è la fx INSERISCI e creiamo la fx che esegue sul nuovo
    $scope.inserttodo = function () {

        var nuovo = {
            titolo: $scope.nuovotodo,
            inizio: $scope.data,
            autore: '5bc1ff38fb6fc0602744c8c5'
        }

        todoService.create(nuovo)
            .then(function (res) {
                return todoService.getAll();
            })
            .then(function (res) {
                $scope.todos = res.data;
            })
            .catch(function (err) {
                console.log(err)
            });

    }

    //questa è la fx MODIFICA

    $scope.modifica = function (id, titolo, testo) {
        todoService.update(id, titolo, testo)
            .then(function (res) {
                return todoService.getAll();
            })
            .then(function (res) {
                $scope.todos = res.data;
            })
            .catch(function (err) {
                console.log(err)
            });
    }

    //questa è la fx CANCELLA 
    $scope.cancella = function (id) {
        todoService.deleteOne(id)
            .then(function (res) {
                return todoService.getAll();
            })
            .then(function (res) {
                $scope.todo = res.data;
            })
            .catch(function (err) {
                console.log(err)
            });
    }


});