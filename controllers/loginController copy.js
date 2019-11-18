const { generateId } = require('../utils');
const UserModel = require('../models/User');
const mongoose = require('mongoose');

async function loginController(req, res) {
  try {

    const foundUser = users.find(
      existentUser =>
        existentUser.username === user.username &&
        existentUser.password === user.password,
    );


    if (foundUser) {
      const token = generateId();
    
      foundUser.token = token;
    
      users.patch('/user/:id', (req, res) => {
        users.findByIdAndUpdate(req.params.id, {
            token: req.body.token
        }, {new:true,useFindAndModify: false})
        .then(user=>res.send(user))
        .catch(error=>console.log(error))
    });
    } else {
      res.status(401).json({ message: `invalid login` });
    };


  } catch (error) {
    console.log(error);
  }
};



module.exports = loginController;