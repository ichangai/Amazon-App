const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const dotenv = require('dotenv');
require('./models/database')
const User = require('./models/user');


dotenv.config();
require('dotenv').config()
const app = express()


//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :false}));

// require apis
const productRoutes = require('./routes/products');

app.use("/api", productRoutes);

app.listen(3000, err => {
    if(err){
        console.log(err)
    }else{
        console.log("Amazing")
    }
})

