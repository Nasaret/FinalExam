var mongoose = require("mongoose");
var Message = mongoose.model("Message");
module.exports.getAll = function(req, res){
  console.log("get all messages");
  Message
    .find
    .exec(function(err, messages){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(messages);
      }
    });
}
