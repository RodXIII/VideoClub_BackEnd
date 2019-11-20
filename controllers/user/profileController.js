
const UserModel = require('../../models/User');

const profileController = (req, res) => {
    UserModel.findById(req.params.id)
        .then(users => res.send(users))
        .catch(error => console.log(error))
}
module.exports = profileController;