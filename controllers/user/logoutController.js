const UserModel = require('../../models/User');
const mongoose = require('mongoose');

const logoutController = (req, res) => {

    UserModel.findOne({
            username: req.body.username
        })
        .then((foundUser) => {

            UserModel.findByIdAndUpdate({
                    _id: foundUser._id
                }, {
                    token: false
                })
                .then(() => {

                    res.send({
                        message: "User is loged out"
                    })

                })

        })
        .catch((err) => {
            console.log(err);

        })

};

/* const logoutController = (req, res) => {
    
    
    const token = req.user.token;

    const foundUser = db.users.find(
        existentUser => existentUser.token === token,
    );

    if (foundUser) {
        delete foundUser.token;
        fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));

        res
            .status(200)
            .json({ message: `valid logout` });

    } else {
        res.status(500).json({ message: `ops` })
    }
}; */

module.exports = logoutController;