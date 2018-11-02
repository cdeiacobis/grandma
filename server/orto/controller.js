var Todo = require('./Todo.js'); // richiamiamo Todo.js dove c'è il MODELLO che utilizza lo Schema
var User = require('../users/User.js'); //richiamo il file user dove c'è lo schema

module.exports = (function () {


    var getAll = function (req, res) {
        var concluso = req.query.categoria; //per filtrare la categoria 8non più i conclusi)

        //trovami tutto e mandamelo come json
        if (categoria === undefined) {
            Todo
                .find() //solo find, non c'è nessuna condizione deve prendere tutto

                .populate('autore')

                .then(function (data) {
                    res.json(data)
                })
                .catch(function (err) {
                    res.json(err);
                })

        }
        else {

            Todo
                .find({
                    categoria : categoria  //c'è una condizione true o false (categoria=true)
                })

                .populate('autore')

                .then(function (data) {
                    res.json(data)
                })
                .catch(function (err) {
                    res.json(err);
                })
        }
    }

    var getOne = function (req, res) {
        Todo
            .findById(req.params.id) //recuperiamo il dettaglio tramite id

            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }



    var create = function (req, res) {
        var nuovo = req.body;         //

        var todo = new Todo(nuovo); //creazione di un oggetto si fa con new e passo la var nuovo al costruttore

        todo.save()     //per il salvataggio e in risposta ci risponde con data
            .then(function (data) {
                res.json(data);
            })
            //equivale a .then((data) => console.log(data))

            .catch(function (err) {          //catch intercetta gli errori
                res.json(err);
            })
        //equivale a .cath((err) => console.log(err)

    }


    var update = function (req, res) {
        Todo.findByIdAndUpdate(req.params.id, req.body) //passo l'id per la ricerca e il body che devo mettere dentro
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }

    var deleteOne = function (req, res) {
        Todo
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
        getOne,
        create,
        update,
        deleteOne
    }

})();