const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/teste2',{useNewUrlParser: true})

app.get('./', (req,res) =>
{
    res.send('Hello')
})

app.use(express.json())
app.use(require('./routes'))

app.listen(3000,() =>
{
    console.log('server is running on port 3000')
})