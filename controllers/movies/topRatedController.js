const MovieModel = require('../../models/Movie');

const topRatedController = (req, res) => {
    
    MovieModel.find({}).sort({vote_average: -1}).limit(20)
        .then(movies => res.send(movies))
        .catch(error => res.send(error))
}

module.exports = topRatedController;