angular.module('app').controller('consigliController', function ($scope, consigliService) {

    //DEFINIAMO TUTTA LA LOGICA DEL NOSTRO CONTROLLER

    $scope.listaAttiva = false;
    $scope.nuovoAttivo = false;

    $scope.cucinaAttivo = false;
    $scope.ortoAttivo = false;
    $scope.pulizieAttivo = false;
    $scope.proverbiAttivo = false;
    $scope.nuovoAttivo = false;

    var rendiAttivo = function (categoria) {
        if (categoria == 'ricette') {
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

    $scope.nuovo = function () {
        $scope.nuovoconsiglio = {};
        $scope.statoCreazione = true;
        $scope.statoModifica = false;
        rendiAttivo('nuovo');
        $scope.listaAttiva = false;
        $scope.nuovoAttivo = true;
        $scope.dettaglio = false;

    }

    $scope.getConsigli = function (categoria) {
        $scope.listaAttiva = true;
        $scope.nuovoAttivo = false;
        $scope.dettaglio = false;


        rendiAttivo(categoria)

        consigliService.getConsigli(categoria)
            .then(function (res) {
                $scope.consigli = res.data;
            })
            .catch(function (err) {
                console.log(err);
            });
    }


    $scope.leggiTutto = function (consiglio) {
        $scope.listaAttiva = false;
        $scope.nuovoAttivo = false;
        $scope.dettaglio = true;

        $scope.dettaglioConsiglio=consiglio;
    }


    $scope.cancella = function (id, categoria) {
        $scope.listaAttiva = true;
        $scope.nuovoAttivo = false;
        $scope.dettaglio = false;
        var r = confirm("Sei sicuro di voler cancellare?");
        if (r == true) {
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

        } else {
          
        }
       
    }

    $scope.inserisci = function () {

        //autore messo a mano
        $scope.nuovoconsiglio.autore = '5bc1ff6dfb6fc0602744c8e9';
        // localStorage.setItem('autoreId', '5bc1ff6dfb6fc0602744c8e9')
        // $scope.nuovoconsiglio.autore = localStorage.getItem('autoreId');

        consigliService.create($scope.nuovoconsiglio, $scope.nuovoconsiglio.categoria)
            .then(function () {
                $scope.getConsigli($scope.nuovoconsiglio.categoria)
            })
            .catch(function (err) {
                console.log(err);
            });

    }

    $scope.modifica = function (consiglio) {
        $scope.statoCreazione = false;
        $scope.statoModifica = true;
        rendiAttivo('nuovo');
        $scope.listaAttiva = false;
        $scope.nuovoAttivo = true;
        $scope.dettaglio = false;        
        $scope.nuovoconsiglio = consiglio;
    }



    $scope.aggiorna = function () {

        consigliService.update($scope.nuovoconsiglio._id, $scope.nuovoconsiglio.categoria, $scope.nuovoconsiglio)
            .then(function () {
                $scope.getConsigli($scope.nuovoconsiglio.categoria)
            })
            .catch(function (err) {
                console.log(err);
            });

    }
});