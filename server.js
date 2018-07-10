import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import UserSchema from './src/models/users';
import {
    createToken
} from './src/resolvers/create';
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';

//Iniciamos una instancia del servidor de express.
const app = express();
const PORT = process.env.PORT || 3000;

//Nos conectamos a la base de datos de mLab (MongoDB).
mongoose.connect('mongodb://admin:Poker2294@ds227821.mlab.com:27821/netflix-clone');
const db = mongoose.connection;

//Agregamos callbacks a los casos de error y éxito en la conexión con la DB.
db.on('error', () => console.log("Error en la conexión con al DB"))
    .once('open', () => console.log("Conexión exitosa con la DB"))

//El método use sirve para decirle a express que utilice una librería específica.
app.use(bodyParser.json());

//Endpoint para crear un usuario nuevo.
app.post('/signup', function (req, res) {
    let user = req.body;
    UserSchema.create(user).then((user) => {
        return res.status(201).json({
            "message": "Usuario creado",
            "id": user._id
        });
    }).catch((err) => {
        console.log(err)
        return res.json(err);
    });
});

//Endpoint para logear a un usuario.
app.post('/login', function (req, res) {
    const token = createToken(req.body.email, req.body.password).then((token) => {
        res.status(201).json({
            token
        });

    }).catch(() => {
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

app.use('/graphql', graphQLHTTP((req, res) => ({
    schema,
    graphiql: true,
    pretty: true
})));

app.listen(PORT, function () {
    console.log("Magic Happens in Port " + PORT);
});