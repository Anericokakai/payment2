const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
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

  boughtBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const users = mongoose.model("Users", userSchema);
const category = mongoose.model("Category", categorySchema);
const expense = mongoose.model("Expense", expenseSchema);

module.exports = { users, category, expense };
