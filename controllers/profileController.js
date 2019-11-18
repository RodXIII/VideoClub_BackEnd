
const UserModel = require('../models/User');

async function profileController (req, res) {
    UserModel.find({})
        .then(users => res.send(users))
        .catch(error => console.log(error))
}
module.exports = profileController;