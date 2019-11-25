const UserModel = require('../../models/User');
const MovieModel = require('../../models/Movie');

const orderController = (req, res) => {
console.log("entra aqui")
    MovieModel.find({title: req.body.title})
        .then(movie => {
            console.log(movie)
            var title= movie[0].title
            UserModel.findOneAndUpdate({
                    username: req.body.username
                    
                }, req.body, {
                    new: true,
                    useFindAndModify: false
                })
                .then(user => {
                    
                    const date = new Date();

                    console.log(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+"/")
                    order = {
                        orderedMovie: title,
                        orderDate: date,
                        orderArrive: `${date.getDate()+1}/${date.getMonth()+1}/${date.getFullYear()}`,
                        orderReturn: `${date.getDate()+4}/${date.getMonth()+1}/${date.getFullYear()}`
                    };
                    user.order = order
                    
                    user.save()
                    res.send({
                        message: 'Order successfully'
                    })
                })
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))

}
module.exports = orderController;