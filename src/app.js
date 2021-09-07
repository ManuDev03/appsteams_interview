const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const morganLogger = require('./middleware/logger')
const bookRouter = require('./routers/book.Router')
require('./db/mongoose')

// Set Templating Engine
app.set('view engine', 'ejs')

//configuration
dotenv.config({path:path.resolve(process.cwd(),"src/config/.env")})
const port = process.env.PORT || 3000

//middleware
app.use(morganLogger)
app.use(express.json())
app.use('/api', bookRouter);

app.get('',(req,res)=>{
    res.render('index')
})

app.listen(port, () => {
    console.log('server is runing on port' + port);
})