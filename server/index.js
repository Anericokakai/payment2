const express = require('express');
const mongoose = require('mongoose');

const app = express();


// ! connection to mongodb
const connectionString = 'mongodb://127.0.0.1:27017/payment'
const connect = () =>{
    
}

app.listen(8000, ()=>{
    console.log("listening on port 8000");
})

