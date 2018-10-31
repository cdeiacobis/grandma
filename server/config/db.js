var mongoose = require('mongoose'); //ci serve mongoose lo richiamiamo

//facciamo la connessione al db
mongoose.connect('mongodb://root2:root123@ds243812.mlab.com:43812/provacaty',
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("connesso al db")
        }
    });


