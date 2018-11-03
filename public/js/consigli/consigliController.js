angular.module('app').controller('consigliController', function ($scope, consigliService) {

    //DEFINIAMO TUTTA LA LOGICA DEL NOSTRO CONTROLLER

    $scope.cucinaAttivo=false;
    $scope.ortoAttivo=false;
    $scope.pulizieAttivo=false;
    $scope.proverbiAttivo=false;
    $scope.nuovoAttivo=false;

    var rendiAttivo=function(categoria){
        if (categoria=='ricette'){
            $scope.cucinaAttivo = true;
            $scope.ortoAttivo = false;
            $scope.pulizieAttivo = false;
            $scope.proverbiAttivo = false;
            $scope.nuovoAttivo = false;
        }
        if (categoria == 'orto') {
            $scope.cucinaAttivo = false;
            $scope.ortoAttivo = true;
            $scope.pulizieAttivo = false;
            $scope.proverbiAttivo = false;
            $scope.nuovoAttivo = false;
        }
        if (categoria == 'pulizie') {
            $scope.cucinaAttivo = false;
            $scope.ortoAttivo = false;
            $scope.pulizieAttivo = true;
            $scope.proverbiAttivo = false;
            $scope.nuovoAttivo = false;
        }
        if (categoria == 'proverbi') {
            $scope.cucinaAttivo = false;
            $scope.ortoAttivo = false;
            $scope.pulizieAttivo = false;
            $scope.proverbiAttivo = true;
            $scope.nuovoAttivo = false;
        }
        if (categoria == 'nuovo') {
            $scope.cucinaAttivo = false;
            $scope.ortoAttivo = false;
            $scope.pulizieAttivo = false;
            $scope.proverbiAttivo = false;
            $scope.nuovoAttivo = true;
        }
    }

    $scope.nuovo=function(){
        rendiAttivo('nuovo')
    }

    $scope.getConsigli = function (categoria) {

        rendiAttivo(categoria)

        consigliService.getConsigli(categoria)
            .then(function (res) {
                $scope.consigli = res.data;
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    $scope.cancella = function (id, categoria) {
        consigliService.deleteOne(id, categoria)
            .then(function () {
                return consigliService.getConsigli(categoria)
            })
            .then(function (res) {
                $scope.consigli = res.data;
            })
            .catch(function (err) {
                console.log(err);
            });

    }



    //     //VOGLIO RECUPERARE I TO DO FILTRATI PER CATEGORIA ????????????????????????? COME SI FA????????
    //      $scope.getSometodo = function (categoria){

    //    todoService.getAll(categoria)
    //         .then(function (res) {
    //             return todoService.getAll();
    //         })
    //         .then(function (res) {
    //             $scope.todo = res.categoria;
    //         })
    //         .catch(function (err) {
    //             console.log(err)
    //         });
    // }


    // //questa è la fx INSERISCI e creiamo la fx che esegue sul nuovo
    // $scope.inserttodo = function () {

    //     var nuovo = {
    //         titolo: $scope.nuovotodo,
    //         inizio: $scope.data,
    //         autore: '5bc1ff38fb6fc0602744c8c5'
    //     }

    //     todoService.create(nuovo)
    //         .then(function (res) {
    //             return todoService.getAll();
    //         })
    //         .then(function (res) {
    //             $scope.todos = res.data;
    //         })
    //         .catch(function (err) {
    //             console.log(err)
    //         });

    // }

    // //questa è la fx MODIFICA

    // $scope.modifica = function (id, titolo, testo) {
    //     todoService.update(id, titolo, testo)
    //         .then(function (res) {
    //             return todoService.getAll();
    //         })
    //         .then(function (res) {
    //             $scope.todos = res.data;
    //         })
    //         .catch(function (err) {
    //             console.log(err)
    //         });
    // }

    // //questa è la fx CANCELLA 
    // $scope.cancella = function (id) {
    //     todoService.deleteOne(id)
    //         .then(function (res) {
    //             return todoService.getAll();
    //         })
    //         .then(function (res) {
    //             $scope.todo = res.data;
    //         })
    //         .catch(function (err) {
    //             console.log(err)
    //         });
    // }


});