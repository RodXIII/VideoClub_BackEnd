
const MovieModel = require('../../models/Movie');

const discoverController = (req, res) => {
    
    MovieModel.find({}).limit(20)
        .then(movies => res.send(movies))
        .catch(error => res.send(error))
}

module.exports = discoverController;