const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

const authorizationMiddleware = async (req, res, next) => {

    try {

        const token = req.headers.authorization;
        const payload = jwt.verify(token, 'missecretito')


        const user = await UserModel.findOne({
            _id: payload._id,
            tokens: token

        });

        if (!user) {
            throw new Error('Unauthorized user')

        }

        req.user = user;

        next()

    } catch (error) {
        console.log(error);
        return res.status(401).send(error.message)
    }
}





module.exports = authorizationMiddleware