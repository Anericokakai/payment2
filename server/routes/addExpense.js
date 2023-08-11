const express = require("express");
const { users, category, expense } = require("../schemas/userSchema");
const { get } = require("mongoose");

// ! add an expense
const addExpense = express.Router();
addExpense.post("/api/v1/add-expense", async (req, res) => {
  console.log(req.body);
});

// ! select specific user
const match = express.Router();
match.get("/api/v1/get-match", async (req, res) => {
  console.log(req.body);
  const searchedUser = await users.findOne({ username: req.body.username });

  if (!searchedUser) {
    return res.json({ message: "No such user" });
  }
  // return res.json(searchedUser.username)
  const matchUser = await searchedUser.sharingUser();
});

// ! add category
const addCategory = express.Router();
addCategory.post("/api/v1/add-category", async (req, res) => {
  const categoryToAdd = req.body.category;
  try {
    const addCategory = await category.create({ Category: categoryToAdd });

    if (!addCategory) {
      return res.json({ message: "failed to add category" });
    }

    return res.json("Category added");
  } catch (error) {
    return res.json(error.message);
  }
});

// ! get all categories
const getCategories = express.Router();
getCategories.get("/api/v1/get-categories", async (req, res) => {
    const getCategories = await category.find({}, {Category : 1, _id: 0});
    if(!getCategories){
        return res.json("failes to get categories")
    }
    return res.json(getCategories)
});

module.exports = { addCategory, getCategories };
