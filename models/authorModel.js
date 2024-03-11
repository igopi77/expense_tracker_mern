const mongoose = require("mongoose");

const Author = new mongoose.Schema({
    name:String,
    email :String,
    phone:String,
  });

module.exports = mongoose.model("author",Author);
