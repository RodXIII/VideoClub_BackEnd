/* const express = require('express');
const app = express();
//const UserModel = require('./models/User');
const mongoose = require('mongoose');

//CONTROLADORES
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const profileControler = require('./controllers/profileController');
const logoutController = require('./controllers/logoutController');

//MIDDLEWARES
const loggingMiddleware = require('./middlewares/loggingMiddleware');
const authorizationMiddleware = require('./middlewares/authorizationMiddleware')


/////////////////////////////////


app.use(express.json());

app.post('/user/login',loginController);
app.get('/user/logout/:token', authorizationMiddleware, logoutController);
app.get('/user/me/:id', authorizationMiddleware, profileControler);
app.post('/user/register', registerController);


app.use((req, res) => {
    res.status(404).json({ message: 'If no one has reply to you yet, this should be a not found error' })
})

mongoose.connect('mongodb://localhost:27017/VideoClub', //conexión a MongoDB
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('conectado a mongodb'))
    .catch(error => console.log('Error al conectar a MongoDB ' + error));


app.listen(3000, () => console.log('app listening in localhost:3000')); */