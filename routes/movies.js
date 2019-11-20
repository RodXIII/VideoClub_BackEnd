const router = require('express').Router();
const MovieModel = require('../models/Movie');

//CONTROLADORES
const discoverController = require('../controllers/movies/discoverController');

//MIDDLEWARES
//const loggingMiddleware = require('../middlewares/loggingMiddleware');

//ENDPOINTS CON CONTROLADORES APLICADOS
router.get('/', discoverController);

//ENDPOINTS SIN FRAGMENTAR
/* router.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.send(users))
        .catch(error => console.log(error))
}) */


module.exports = router;