const express = require("express");
const { users, category, expense } = require("../schemas/userSchema");

// ! add an expense
const addExpense = express.Router();
addExpense.post("/api/v1/add-expense", async (req, res) => {
  console.log(req.body);
  const { item, cost, boughtBy, categoryBought} = req.body
  try {
    const checkCategory = await category.findById({
      _id: categoryBought
    });
    if (!checkCategory) {
      return res.json("category does not exist");
    }
    const categoryToAdd = checkCategory.Category;

    const checkUser = await users.findById({ _id: boughtBy });
    if (!checkUser) {
      return res.json("User does not exist");
    }
    const userToAdd = checkUser.username;
    const values = {
        item : item,
        Cost : cost,
        boughtBy : boughtBy,
        categoryBought : categoryBought,
    }

    const addExpense = await expense.create(values)

    if(!addExpense){
        return res.json("failed to add expense")
    }
    return res.json(`Added expense to ${categoryToAdd} category to be shared with user ${userToAdd}`);
  } catch (error) {
    return res.json(error.message);
  }
});

// ! select specific user
const match = express.Router();
match.get("/api/v1/get-match", async (req, res) => {
  console.log(req.body);

  const getUsers = await users.aggregate([
    { $project: { _id: 1, username: 1 } },
  ]);

  if (!getUsers) {
    return res.json("failed to get users");
  }
  return res.json(getUsers);
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
  const getCategories = await category.find({}, { Category: 1, _id: 0 });
  if (!getCategories) {
    return res.json("failes to get categories");
  }
  return res.json(getCategories);
});

module.exports = { addCategory, getCategories, match, addExpense };
