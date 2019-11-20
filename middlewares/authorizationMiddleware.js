const UserModel = require('../models/User');
const mongoose = require('mongoose');

const authorizationMiddleware = (req, res, next) => {

    const token = req.headers.authorization;

    UserModel.findOne({
        _id: req.body._id
        
    });

    if (token === req.body.token) {
        res.send({message: 'token valido'})
        next();

    } else {
        res.status(401).json({
            message: 'Invalid token'
        });
    }
}





module.exports = authorizationMiddleware