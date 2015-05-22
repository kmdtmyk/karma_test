"use strict";

angular.module("my.controller.user", [])


.controller("UserIndexController", ["$scope", function ($scope){
	$scope.test = "user";

	$scope.count = 0;

	$scope.increment = function(){
		$scope.count++;
	}

}])


.controller("UserEditController", ["$scope", function ($scope){

	
}])

