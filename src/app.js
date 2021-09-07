const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const morganLogger = require('./middleware/logger')



//configuration
dotenv.config({path:path.resolve(process.cwd(),"src/config/.env")})
const port = process.env.PORT || 3000

//middleware
app.use(morganLogger)
app.use(express.json())

app.post('/api/books', (req, res) => {
    res.status(200).json({message: "book is added to records"})
})
app.get('/api/books', (req, res) => {
    res.status(200).json({message: "All books records"})
})
app.get('/api/books/:id', (req, res) => {
    res.status(200).json({message: "individual book record"})
})
app.put('/api/books/:id', (req, res) => {
    res.status(200).json({message: "update individual book in the record"})
})
app.delete('/api/books/:id', (req, res) => {
    res.status(200).json({message: "delete individual book in the record"})
})
app.listen(port, () => {
    console.log('server is runing on port' + port);
})