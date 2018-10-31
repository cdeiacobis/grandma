var path = require('path');
var bodyparser = require('body-parser');

var todos = require('../todos/todos.js');

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

    //serviamo js al client
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'public', 'js')));

    //invia la index.html al cliente
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });

    //Utilizzo il router todos per tutte le rotte che partono con /todos
    app.use('/todos', todos);
}