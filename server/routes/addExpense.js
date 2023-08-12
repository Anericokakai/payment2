const express = require("express");
const { users, category, expense } = require("../schemas/userSchema");

// ! add an expense
const addExpense = express.Router();
addExpense.post("/api/v1/add-expense", async (req, res) => {
  console.log(req.body);
  const { item, cost, sharedBy, boughtBy, categoryBought} = req.body
  try {
    const checkCategory = await category.findById({
      _id: categoryBought
    });
    if (!checkCategory) {
      return res.json("category does not exist");
    }
    const categoryToAdd = checkCategory.Category;
// who to share the expense with
    const checkUser = await users.findById({ _id: sharedBy });
    if (!checkUser) {
      return res.json("User does not exist");
    }
    const userToAdd = checkUser.username;
    const values = {
        item : item,
        Cost : cost,
        sharedBy : sharedBy,
        categoryBought : categoryBought,
        boughtBy : boughtBy,
    }

    const addExpense = await expense.create(values)

    if(!addExpense){
        return res.json("failed to add expense")
    }

    //  get user making the request
    const userMaking = await users.findById({_id: boughtBy})
    if(!userMaking){
      return res.json("no such user")
    }
    const user  = userMaking.username
    return res.json(`Added expense to ${categoryToAdd} category to be shared with user ${userToAdd} added by ${user}` );
  } catch (error) {
    return res.json(error.message);
  }
});

// ! get all expenses
const getAllExpense = express.Router();
getAllExpense.post("/api/v1/get-all-expenses", async(req,res)=>{
  console.log(req.body);

  // logic  == get all expenses where boughtby id is mine and sharedbyid is the sharing user
  // and get all expenses where sharedbyid is mine and bought by id is for the sharing user
  // will need myid and sharing user id
  // where to get sharingid???


} )

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



module.exports = { addCategory, getCategories, match, addExpense, getAllExpense };
