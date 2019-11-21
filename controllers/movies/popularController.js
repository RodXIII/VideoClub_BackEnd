const MovieModel = require('../../models/Movie');

const popularController = (req, res) => {
    
    MovieModel.find({}).sort({popularity: -1}).limit(20)
        .then(movies => res.send(movies))
        .catch(error => res.send(error))
}

module.exports = popularController;