var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ //lo schema è fatto da nome e cognome
    nome: String,
    cognome: String
});


var User = mongoose.model('User', userSchema); //creo Il MODELLO user che utilizerà lo schema userSchema

module.exports = User; //esporto il modello


//è equivalente a scrivere
//module.exports = mongoose.model('User', {
    //nome:String,
    //cognome: String
//})