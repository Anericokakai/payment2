const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username : {
    type : String,
    unique :true,
  },
  firstName: String,
  profilePic: String,
  passwordHash: String,
//   ! user to share costs with
  sharingUser: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
});

const categorySchema = new mongoose.Schema({
  Category: String,
});

const expenseSchema = new mongoose.Schema({
  item: String,
  Cost: Number,
  DateAdded: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  boughtBy : {
    type: mongoose.SchemaTypes.ObjectId,
    ref : "Users"
  },

  sharedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  categoryBought: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const aggregateSchema = new mongoose.Schema({
  totalCost : Number,
  user_id : {
    type : mongoose.SchemaTypes.ObjectId,
    ref : "Users"
  },
  username : String,
},{_id: false})


const users = mongoose.model("Users", userSchema);
const category = mongoose.model("Category", categorySchema);
const expense = mongoose.model("Expense", expenseSchema);
const aggregateData = mongoose.model("aggregateData", aggregateSchema)

module.exports = { users, category, expense, aggregateData };
