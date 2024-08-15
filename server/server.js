const express = require('express');
const cors = require('cors')
const dbCOnnection = require('./database/db');
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 6000;

dbCOnnection()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})