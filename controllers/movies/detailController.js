const MovieModel = require('../../models/Movie');

const detailController = (req, res) => {
 
    MovieModel.find({
        _id: req.params.id
    })
    .then(movie => res.send(movie))
    .catch(error => res.send(error))
}

module.exports = detailController;