"use strict";

angular.module("myApp",
	["ngRoute", "my.controller", "my.filter", "my.directive", "my.resource", "my.mock"]
)

.config(["$sceProvider", function($sceProvider){
	//$sceProvider.enabled(false);
}])

.config(["$sceDelegateProvider", function($sceDelegateProvider){

	// $sceDelegateProvider.resourceUrlWhitelist([
	// 	"self",
	// 	"fmp://**"
	// ]);

	// $sceDelegateProvider.resourceUrlBlacklist([
	// 	"http://google.co.jp"
	// ]);

}])

.config(["$compileProvider", function($compileProvider){

	$compileProvider.aHrefSanitizationWhitelist(/(https?):/);

}])


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
			controller: "UserNewController"
		})
		.when("/users/:id", {
			templateUrl: "views/users/show.html",
			controller: "UserShowController"
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

}])

