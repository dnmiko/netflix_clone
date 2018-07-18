'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./src/models/users');

var _users2 = _interopRequireDefault(_users);

var _create = require('./src/resolvers/create');

var _verify = require('./src/resolvers/verify');

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Iniciamos una instancia del servidor de express.
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

//Nos conectamos a la base de datos de mLab (MongoDB).
_mongoose2.default.connect('mongodb://admin:Poker2294@ds227821.mlab.com:27821/netflix-clone');
var db = _mongoose2.default.connection;

//Agregamos callbacks a los casos de error y éxito en la conexión con la DB.
db.on('error', function () {
    return console.log("Error en la conexión con al DB");
}).once('open', function () {
    return console.log("Conexión exitosa con la DB");
});

//El método use sirve para decirle a express que utilice una librería específica.
app.use(_bodyParser2.default.json());
//Cuando definimos cors debemos especificar una lista negra o una lista blanca, nunca sólo así vacío.
app.use((0, _cors2.default)());

//Endpoint para crear un usuario nuevo.
app.post('/signup', function (req, res) {
    var user = req.body;
    _users2.default.create(user).then(function (user) {
        return res.status(201).json({
            "message": "Usuario creado",
            "id": user._id
        });
    }).catch(function (err) {
        console.log(err);
        return res.json(err);
    });
});

//Endpoint para logear a un usuario.
app.post('/login', (0, _cors2.default)(), function (req, res) {
    var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
        res.status(201).json({
            token: token
        });
    }).catch(function () {
        res.status(403).json({
            message: "Login Failed, invalid credentials"
        });
    });
});

//Endpoint principal, para saber que ya levantamos el servidor.
app.get('/', function (req, res) {
    //req = request
    //res = response
    res.send("Estoy funcionando");
});

//Middleware para proteger graphql.
app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization'];
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));

app.listen(PORT, function () {
    console.log("Magic Happens in Port " + PORT);
});