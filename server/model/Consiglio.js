var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var todoSchema = new Schema({
    categoria: {
        type: String,
        required: true
    },

    titolo: {
        type: String,
        required: true
    },

    testo: {
        type: String,
        required: true
    },

    autore: {
        type: mongoose.Schema.Types.ObjectId, //è di tipo objetId che è un tipo di Mongo
        ref: 'User',
        required: true
    },

    data: {
        type: Date,
        required: true
    }

});


var Todo = mongoose.model('Todo', todoSchema); // il nome del modello + il modello utilizza il todoschema
module.exports = Todo; //esportiamo


