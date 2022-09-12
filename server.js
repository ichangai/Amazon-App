const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const dotenv = require('dotenv');
require('./models/database')
const User = require('./models/user');


dotenv.config();
require('dotenv').config()
// dotenv.config({ path: ".env" });
// connectDB() 
const app = express()


//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :false}));


app.post("/", (req, res) => {
 let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err) => {
        if(err){
            res.json(err); 
        }else {
            res.json('successfully saved')
        }
    })

})

app.get('/', (req, res) => {
    res.json("Amazing Amazon Purpose")
})

app.listen(3000, err => {
    if(err){
        console.log(err)
    }else{
        console.log("Amazing")
    }
})

