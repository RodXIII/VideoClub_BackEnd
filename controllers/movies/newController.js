const MovieModel = require('../../models/Movie');

const newController = (req, res) => {
    
    MovieModel.find({
    }).sort({release_date: -1}).limit(20)
        .then(movies => res.send(movies))
        .catch(error => res.send(error))
}

module.exports = newController;