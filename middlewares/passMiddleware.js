const UserModel = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const passMiddleware = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)(hash=>{//generamos hash de forma asíncrona
        req.body.password = hash;})//sobreescribimos la propiedad password con el hash ya encriptado
        next();//necesitamos el next para pasar al save()
}






module.exports = passMiddleware