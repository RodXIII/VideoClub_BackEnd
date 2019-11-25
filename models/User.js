const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    tokens:[],
    order: {
        orderedMovie: String,
        orderDate: Date,
        orderArrive: String,
        orderReturn: String
    }
})

UserSchema.methods.toJSON=function (params) {
    const user=this._doc;
    delete user.tokens;
    delete user.password;
    return user;
}

UserSchema.methods.comparePassword=function (password) {
    const user = this;
    return bcrypt.compare(password,user.password)
}

UserSchema.pre('save', function (next) { //mongoose middleware que se ejecuta antes del save(), utilizamos ES5 functions porque queremos el this para acceder a la instancia
    const user = this;
    if (user.password.length < 30) {
        
        bcrypt.hash(user.password, 10).then(hash => {//generamos hash de forma asíncrona
            user.password = hash;//sobreescribimos la propiedad password con el hash ya encriptado
            
            next();//necesitamos el next para pasar al save()
        })
        
        .catch(error=>{
            console.log(error);
            res.status(500).send(error);
        })
    }else {
        next();
    }
})

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;
