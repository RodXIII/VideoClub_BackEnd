const {
	generateId
} = require('../utils');
const UserModel = require('../models/User');
const mongoose = require('mongoose');

const loginController = (req, res) => {



	UserModel.findOne({
			username: req.body.username

		})
		.then((foundUser) => {

			if (foundUser.password != req.body.password) {
				res.send({
					message: 'la contraseña es incorrecta'
				})
				res.status(401);
				return;
			}

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
				})






		})
		.catch((err) => {
			console.log(err);

		})




};



module.exports = loginController;