// ! app configuration
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const cors = require('cors')


const app = express();
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

// ! import files
const { login, create} = require('./routes/login')
const {addCategory, getCategories,match} = require('./routes/addExpense')
// const {match} = require('./routes/match')


// ! connection to mongodb and server
const connect = mongoose.connect('mongodb://127.0.0.1:27017/payment').then(()=>{
    app.listen(8000, ()=>{
        console.log("listening on port 8000");
    })
})


// ! app routes

// todo routes to add
// login create account
// match user to sharing partner
// add new expense
// remove added expense
// get all expenses
// make payment
// request payment
// 

// ! create account  and login routes
app.use(create)
app.use(login)

// ! match user
// app.use(match)

// ! get and add categories
app.use(addCategory)
app.use(getCategories)


// ! get all users
app.use(match)