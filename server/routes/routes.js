var path = require('path');
var bodyparser = require('body-parser');

var orto = require('../orto/orto.js');
var ricette = require('../ricette/ricette.js');
//var pulizie = require('../pulizie/pulizie.js');
//var proverbi = require('../proverbi/proverbi.js');


var path = require('path');

module.exports = function (express, app) {

    //PARSE APPLICATION/JSON
    app.use(bodyparser.json());

    //serviamo angular al client
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery', 'dist')));
    app.use('/moment', express.static(path.join(__dirname, '..', '..', 'node_modules', 'moment')));
    app.use('/datetimepicker', express.static(path.join(__dirname, '..', '..', 'node_modules', '@ui-platform', 'angularjs-bootstrap4-datetimepicker', 'dist')));
    app.use('/datetimeinput', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-date-time-input', 'src')));

    //serviamo js, css, img al client *il client puo accedere alle cartelle che sono sul server
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'public', 'js')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'public', 'css')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));


    //invia la index.html al cliente
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });

    //Utilizzo il router per tutte le rotte che partono con /todos
    app.use('/orto', orto);
    app.use('/ricette', ricette);
    // app.use('/pulizie', pulizie);
    //app.use('/proverbi', proverbi);
    // app.use('/proverbi', proverbi);

}