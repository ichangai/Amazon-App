const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :false}));


app.post("/", (req, res) => {
 console.log(req.body.name)
})

app.get('/', (req, res) => {
    res.json("Amazing Amazon Purpose")
})

app.listen(3000, (err)=> {
    if(err){
        console.log(err)
    }else{
        console.log("Amazing")
    }
})