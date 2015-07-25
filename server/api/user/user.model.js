var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	"name" : String,
	"email" : {
		"unique" : true,
		"type" : String
	},
	"password" : String
});

module.exports = mongoose.model("users",userSchema);