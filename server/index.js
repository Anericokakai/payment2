const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ! import files
const {  users, category, expense} = require('./schemas/userSchema')


// ! connection to mongodb and server
const connect = mongoose.connect('mongodb://127.0.0.1:27017/payment').then(()=>{
    app.listen(8000, ()=>{
        console.log("listening on port 8000");
    })
})


// ! app routes



