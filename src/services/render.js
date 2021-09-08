const axios = require('axios')

exports.homeRoutes = (req,res)=>{
    // make a get request to api/users
    axios.get("")
    .then(function(response){
        console.log(response)
        res.render('index',{users:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}