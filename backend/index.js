const express = require('express');
const mongoose=require('mongoose')
const cors=require("cors")
const bodyParser=require("body-parser")
const logger=require("morgan")
require('dotenv').config()

const app=express();
const port=process.env.PORT || 3001;

var mongoDB=process.env.MONGOOSE_URL
mongoose.connect(mongoDB,{useNewUrlParser:true, useUnifiedTopology:true})

var db=mongoose.connection
db.on('error',console.error.bind(console,'MongoDB connection error:'))

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin",'*')
    
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

var indexRouter=require('./router/index')
app.use('/',indexRouter)

app.use(logger('dev'))
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(port,function(){
    console.log("Running on"+port)
})

module.exports=app