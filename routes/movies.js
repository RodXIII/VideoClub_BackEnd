const router = require('express').Router();
const MovieModel = require('../models/Movie');

//CONTROLADORES
const discoverController = require('../controllers/movies/discoverController');
const popularController = require('../controllers/movies/popularController');
const topRatedController = require('../controllers/movies/topRatedController');
const newController = require('../controllers/movies/newController');
const genreController = require('../controllers/movies/genreController');
const detailController = require('../controllers/movies/detailController');

//MIDDLEWARES
//const loggingMiddleware = require('../middlewares/loggingMiddleware');

//ENDPOINTS CON CONTROLADORES APLICADOS
router.get('/', discoverController);//PAGINA PRINCIPAL
router.get('/popular', popularController);//BUSQUEDA POR MAS VISTAS
router.get('/top-rated', topRatedController);//BUSQUEDA POR MEJOR VALORADAS
router.get('/new', newController);//BUSQUEDA POR FECHA DE LANZAMIENTO
router.get('/:genre', genreController); ////BUSQUEDA POR GENERO
router.get('/id/:id', detailController); //DETALLE


//ENDPOINTS SIN FRAGMENTAR
/* router.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.send(users))
        .catch(error => console.log(error))
}) */


module.exports = router;