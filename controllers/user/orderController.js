const UserModel = require('../../models/User');
const MovieModel = require('../../models/Movie');

const orderController = (req, res) => {
    movieTitle=req.body.title
    var title;
    MovieModel.find({title: movieTitle})
        .then(movie => {
           
            if (movie[0].title){
                title= movie[0].title
            }else{
                title= movie.title 
            }
            
            UserModel.findOneAndUpdate({
                    username: req.body.username
                    
                }, req.body, {
                    new: true,
                    useFindAndModify: false
                })
                .then(user => {
                    
                    const date = new Date();
                    const currentDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

                    console.log(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+"/")
                    order = {
                        orderedMovie: title,
                        orderDate: currentDate,
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