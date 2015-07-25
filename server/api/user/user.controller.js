var User = require("./user.model.js")

module.exports.add = function(req,res){
	var data = req.body;
	console.log("data",data);
	User.create(data,function(err,obj){
		if(err){
			return res.json({"status":"error","message":err})
		}
		return res.json({"status":"Success","message":obj});			
	})
}


module.exports.login = function(req,res){
	var data = req.body;
	User.findOne({"email" : data.email},function(err,obj){
		if(err){
			return res.json({"status":"error","message":err})
		}
		if(obj){
			if(data.password === obj.password){
				return res.json({"status":"Succeess","message":"Successful login"});
			} else {
				return res.json({"status":"Success","message":"Invalid password"});	
			}	
		} else {
			return res.json({"status":"Success","message":"Invalid User ID"});	
		}		
	})
}