const router = require('express').Router();
const UserModel = require('../models/User');


//CONTROLADORES
const registerController = require('../controllers/user/registerController');
const loginController = require('../controllers/user/loginController');
const profileController = require('../controllers/user/profileController');
const orderController = require('../controllers/user/orderController');

//MIDDLEWARES
const authorizationMiddleware = require('../middlewares/authorizationMiddleware')

//ENDPOINTS CON CONTROLADORES APLICADOS
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/:id', profileController);
router.patch('/order', authorizationMiddleware, orderController);

//ENDPOINTS SIN FRAGMENTAR
router.patch('/:id', (req, res) => {
    UserModel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true,
            useFindAndModify: false
        })
        .then(user => res.send(user))
        .catch(error => console.log(error))
});
router.delete('/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(user => res.send('Usuario eliminado satisfactoriamente'))
        .catch(error => console.log(error))
})


router.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.send(users))
        .catch(error => console.log(error))
})

module.exports = router;