const express = require("express");
// const bcrypt = require('bcrypt')
const { users, category, expense } = require("../schemas/userSchema");

// ! create acc route
const create = express.Router();
create.post("/api/v1/create", async (req, res) => {
  console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;

  const values = {
    email: email,
    passwordHash: password,
    firstName: req.body.firstName,
    profilePic: req.body.profilepic,
  };

  try {
    const addUser = await users.create(values);
    if (!addUser) {
      return res.status(500).json({ message: "Failed to add user" });
    }
    return res.status(200).json({ message: "User successfully added" });
  } catch (error) {
    console.log(error.message);
  }
});

// ! login route
const login = express.Router();
login.post("/api/v1/login", async (req, res) => {});

module.exports = { create, login };
