const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({

    poster_path: {
        type: String
    },
    adult: {
        type: Boolean
    },
    overview: {
        type: String
    },
    release_date: {
        type: String
    },
    genre_ids: {
        type: Array //array[integer]
    },
    id: {
        type: String,
        unique: true,
    },
    original_title: {
        type: String
    },
    original_language: {
        type: String
    },
    title: {
        type: String
    },
    backdrop_path: {
        type: String
    },
    popularity: {
        type: Number
    },
    vote_count: {
        type: Number
    },
    video: {
        type: Boolean
    },
    vote_average: {
        type: Number
    },

})

const MovieModel = mongoose.model('movie', MovieSchema);

module.exports = MovieModel;