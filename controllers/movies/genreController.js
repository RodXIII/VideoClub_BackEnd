const MovieModel = require('../../models/Movie');

const genreController = (req, res) => {

    let random = Math.floor(Math.random() * 10)
 
    MovieModel.find({
        genre_ids: req.params.genre
    })
    .skip(random)
    .limit(20)
    .then(movies => res.send(movies))
    .catch(error => res.send(error))
}

module.exports = genreController;