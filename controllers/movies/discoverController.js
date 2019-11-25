
const MovieModel = require('../../models/Movie');

const discoverController = (req, res) => {
    
    let random = Math.floor(Math.random() * 500)

    MovieModel.find({})
    .skip(random)
    .limit(20)
        .then(movies => res.send(movies))
        .catch(error => res.send(error))
}

module.exports = discoverController;