"use strict";

angular.module("my.controller.user", ["my.resource"])


.controller("UserIndexController", ["$scope", "$sce", "User", function ($scope, $sce, User){
	
	/*
	User.query(
		[{
			id: [1,2,3],
			name: "foo"
		},{
			id: 2,
			name: "foo"
		}]
	);
	*/

	$scope.users = User.query({});


	//$scope.count = 0;

	//$scope.html = $sce.trustAsHtml("<button>button</button>");

	//$scope.increment = function(){
	//	$scope.count++;
	//}

}])


.controller("UserShowController", ["$scope", "$routeParams", "User", function($scope, $routeParams, User){
	
	$scope.user = User.get($routeParams);
	
}])

.controller("UserEditController", ["$scope", function ($scope){

	
}])

