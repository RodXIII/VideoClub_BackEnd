const UserModel = require('../../models/User');

const loginController = (req, res) => {

    UserModel.findOne({
        username: req.body.username,
        password: req.body.password
    })
    .then(user => {
        if (!user) {
            return res.status(400).send({
                message: 'Usuario o contraseña incorrectos'
            })
        }
        res.send({
            message: 'Bienvenido ' + user.username,
            user
        });
    })
    .catch(error => res.send(error.message))
};

module.exports = loginController;


/* const {generateId} = require('../utils');

const token = generateId();
			UserModel.findOneAndUpdate({
					_id: foundUser._id
				}, {
					token: token
				})
				.then((userLoged) => {

					res.send({
						username: foundUser.username,
						token: userLoged.token
					})

				})
				.catch((err) => {
					console.log(err)
				}) */