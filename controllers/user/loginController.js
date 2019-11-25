const UserModel = require('../../models/User');
const jwt = require('jsonwebtoken');


async function loginController  (req, res)  {

    try {

        let user = await UserModel.findOne({
            username: req.body.username
        })

        if (!user) {
            return res.status(400).send({
                message: 'Usuario o contraseña incorrectos'
            })
        }

        const isMatch = await user.comparePassword(req.body.password)
        if (!isMatch) {
            return res.status(400).send({
                message: 'Usuario o contraseña incorrectos'
            })
        }
        
        const token = jwt.sign({ _id: user._id }, 'missecretito', {
            expiresIn: '24h'
        });
        await UserModel.findOneAndUpdate({  _id: user._id }, {
            $push: {
                tokens: token
            }
        })

        res.send({
            message: 'Bienvenido ' + user.username,
            user,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
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