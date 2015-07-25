app.controller('loginCtrl', ['$scope',"$http","$location", function($scope,$http,$location){
	$scope.login = {};

	$scope.loginBtn = function(){
		console.log("message",$scope.login);
		$http({"method":"post","url":'/api/user/login',data:$scope.login}).success(function(res){
			console.log("res",res);
			if(res.message === "Successful login"){
				$location.path("/home")
			} else {
				alert(res.message);
			}
		}).error(function(err){
			console.log("eror",err);
		})
	}
}])