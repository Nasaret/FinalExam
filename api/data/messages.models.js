var mongoose = require("mongoose");
var messageSchema = new mongoose.Schema({
  title : String,
  content : String,
  author : String,
  date : Date
});

mongoose.model("Message", messageSchema, "messages");
