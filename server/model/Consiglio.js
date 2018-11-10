var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ConsiglioSchema = new Schema({
    categoria: {
        type: String,
        enum: ['orto', 'ricette', 'proverbi', 'pulizie'], //enum: limita la scelta tra le categorie indicate
        required: true
    },

    titolo: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },

    immagine: {
        type: String,
        required: true
    },

    testo: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 500
    },

    autore: {
        type: mongoose.Schema.Types.ObjectId, //è di tipo objetId che è un tipo di Mongo
        ref: 'User',
        required: true
    },

    data: {
        type: Date,
        default: Date.now(),
    }

});


var Consiglio = mongoose.model('Consiglio', ConsiglioSchema); // il nome del modello + il modello utilizza il todoschema
module.exports = Consiglio; //esportiamo


