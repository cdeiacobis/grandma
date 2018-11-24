var Consiglio = require('../model/Consiglio.js'); // richiamiamo Consiglio.js dove c'è il MODELLO che utilizza lo Schema
var User = require('../users/User.js'); //richiamo il file user dove c'è lo schema

module.exports = (function () {


    var getAll = function (req, res) {
        Consiglio
            .find({ categoria: 'ricette' })

            .populate('autore')

            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }


    var getAllByAuthor = function (req, res) {
        Consiglio
            .find({ categoria: 'ricette', autore: req.params.id })

            .populate('autore')

            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }


    var create = function (req, res) {

        var nuovaRicetta = new Consiglio(req.body); //creazione di un oggetto si fa con new e passo la var nuovo al costruttore

        nuovaRicetta.save()     //per il salvataggio e in risposta ci risponde con data
            .then(function (data) {
                res.json(data);
            })

            .catch(function (err) {          //catch intercetta gli errori
                res.json(err);
            })


    }


    var update = function (req, res) {
        Consiglio.findByIdAndUpdate(req.params.id, req.body) //passo l'id per la ricerca e il body che devo mettere dentro
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }

    var deleteOne = function (req, res) {
        Consiglio
            .findByIdAndRemove(req.params.id) //recuperiamo il dettaglio tramite id

            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }



    return {
        getAll,
        getAllByAuthor,
        create,
        update,
        deleteOne
    }

})();