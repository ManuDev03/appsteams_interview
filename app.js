const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const morganLogger = require('./src/middleware/logger')
const bookRouter = require('./src/routers/book.Router')
require('./src/db/mongoose')
const expressLayouts = require('express-ejs-layouts')
const axios = require('axios')

// set template engine
app.use(expressLayouts)
app.set('layout','./layouts/full-width')
app.set('view engine','ejs')

//configuration
dotenv.config({path:path.resolve(process.cwd(),"src/config/.env")})
const port = process.env.PORT || 3000

//middleware
app.use(morganLogger)
app.use(express.json())
app.use('/api', bookRouter);


app.get('',(req,res) =>{
    res.render('index')
})



app.listen(port, () => {
    console.log('server is runing on port' + port);
})