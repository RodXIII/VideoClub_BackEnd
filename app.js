const express = require('express')
const app = express();
const mongoose = require('mongoose');
const userRouter=require('./routes/users')
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
    next();
});
app.use(express.json()); //parseamos el body a json

mongoose.connect('mongodb://localhost:27017/VideoClub', //conexión a MongoDB
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    .then(() => console.log('conectado a mongodb'))
    .catch(error => console.log('Error al conectar a MongoDB ' + error));
app.use('/user',userRouter);
app.listen(3000, () => console.log('servidor levantado correctamente'));