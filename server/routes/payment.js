const express = require("express");
const { users, category, expense } = require("../schemas/userSchema");

// ! make payment
const makePayment = express.Router();
makePayment.post("/api/v1/make-payment", async(req,res)=>{

})

module.exports = {makePayment}