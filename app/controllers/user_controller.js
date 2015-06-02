"use strict";

angular.module("my.controller.user", ["my.resource"])


.controller("UserIndexController", ["$scope", "$sce", "User", function ($scope, $sce, User){
	
	$scope.users = User.query({});

}])


.controller("UserShowController", ["$scope", "$routeParams", "User", function($scope, $routeParams, User){
	
	 User.get($routeParams,
		function(data){
			$scope.user = data;
		},
		function(){
		}
	);
	
}])

.controller("UserNewController", ["$scope", "$location", "User", function ($scope, $location, User){

	$scope.submit = function(){
		User.save($scope.user);
		$location.path("users");
	}
	
}])

.controller("UserEditController", ["$scope", function ($scope){

	
}])

