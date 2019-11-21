const router = require('express').Router();
const MovieModel = require('../models/Movie');

//CONTROLADORES
const discoverController = require('../controllers/movies/discoverController');
const popularController = require('../controllers/movies/popularController');
const topRatedController = require('../controllers/movies/topRatedController');

//MIDDLEWARES
//const loggingMiddleware = require('../middlewares/loggingMiddleware');

//ENDPOINTS CON CONTROLADORES APLICADOS
router.get('/', discoverController);
router.get('/popular', popularController);
router.get('/top-rated', topRatedController);
//router.get('/', Controller); //GENERO
//router.get('/', Controller); //DETALLE


//ENDPOINTS SIN FRAGMENTAR
/* router.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.send(users))
        .catch(error => console.log(error))
}) */


module.exports = router;