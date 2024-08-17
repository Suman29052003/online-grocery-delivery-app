const express = require('express');
const cors = require('cors')
const dbCOnnection = require('./database/db');
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const path = require('path');
const userRoutes = require('./routes/userRoute')


const port = process.env.PORT || 6000;

dbCOnnection()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use(cors({
    origin: '*',
}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json());

app.use('/user',userRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})