"use strict";

angular.module("my.resource", ["ngResource"])

.factory("User", ["$resource", function($resource){
	return $resource("api/v1/users/:id");
}]);
