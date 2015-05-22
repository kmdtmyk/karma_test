"use strict";

angular.module("myApp", ["ngRoute", "my.controller", "my.filter", "my.directive"])


.config(["$routeProvider", function($routeProvider){
	
	$routeProvider
		.when("/", {
			templateUrl: "views/index.html"
		})
		.when("/users", {
			templateUrl: "views/users/index.html",
			controller: "UserIndexController"
		})
		.when("/users/new", {
			templateUrl: "views/users/new.html",
			//controller: "UserNewController"
		})
		.when("/users/:id/edit", {
			templateUrl: "views/users/edit.html",
			//controller: "UserEditController"
		})
		.when("/books", {
			templateUrl: "views/books/index.html",
			controller: "BookIndexController"
		})
		.otherwise({
			templateUrl: "views/404.html"
		});

}]);