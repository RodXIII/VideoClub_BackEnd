const fs = require('fs');

const UserModel = require('../models/User');

async function registerController(req, res) {
  try {
    const user = await new UserModel({
      username: req.body.username,
      password: req.body.password
    }).save()
  
    res.send(user).status(200).json(user);
    
    const longitudPattern = /.{8,}/
  
    if (!longitudPattern.test(user.password)) {
      return res
        .status(400)
        .json({ message: `password too short` });
    }
  
    const digitCharacters = /\d/;
  
    if (!digitCharacters.test(user.password)) {
      return res
        .status(400)
        .json({ message: `password must have a digit` });
    }
  
    const capitalCharacters = /[A-Z]/;
  
    if (!capitalCharacters.test(user.password)) {
      return res
        .status(400)
        .json({ message: `password must have a capitalCase` });
    }
  
    const lowerCharacters = /[a-z]/;
  
    if (!lowerCharacters.test(user.password)) {
      return res
        .status(400)
        .json({ message: `password must have a lowerCase` });
    }
  
    const userExists = UserModel.some(existentUser => existentUser.username === user.username);
  
    if (userExists) {
      return res
        .status(400)
        .json({ message: `email ${user.username} already exists` });
    }

    
 
    
  } catch (error) {
    console.log(error);
  }


};

module.exports = registerController;