
const MovieModel = require('../../models/Movie');

const discoverController = (req, res) => {
    
    MovieModel.find({
        release_date: <'2019-11-06'
    }).sort({release_date: -1}).limit(20)
        .then(movies => res.send(movies))
        .catch(error => res.send(error))
}

module.exports = discoverController;