const express = require("express");
const bcrypt = require('bcrypt')
const { users, category, expense } = require("../schemas/userSchema");

// ! create acc route
const create = express.Router();
create.post("/api/v1/create", async (req, res) => {
  console.log(req.body);

  const email = req.body.email;

  const hashedPass = await bcrypt.hash(req.body.password, 10);

  const values = {
    email: email,
    passwordHash: hashedPass,
    firstName: req.body.firstName,
    profilePic: req.body.profilepic,
    username : req.body.username,
  };

  try {
    const addUser = await users.create(values);
    if (!addUser) {
      return res.status(500).json({ message: "Failed to add user" });
    }
    return res.status(200).json({ message: "User successfully added" });
  } catch (error) {
    console.log(error.message);
    // todo remove sensitive content
    return res.json(error.message).status(500)
  }
});

// ! login route
const login = express.Router();
login.post("/api/v1/login", async (req, res) => {
    const { email, password} = req.body
    console.log(req.body);
    try {
        const checkUserExist = await users.findOne({email: email})
    if(!checkUserExist){
        return res.status(500).json({message: "User does not exist"})
    }
    const checkPassword = await bcrypt.compare(password, checkUserExist.passwordHash)
    
    if(!checkPassword){
        return res.json({status: 500, message: "Invalid login details"})
    }
    } catch (error) {
        return res.json(error.message)
    }
    return res.json("Login successful");
});

module.exports = { create, login };
