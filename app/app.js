"use strict";

angular.module("myApp",
	["ngRoute", "ngMockE2E", "my.controller", "my.filter", "my.directive", "my.resource"]
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
			//controller: "UserNewController"
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


.run(function($httpBackend){

	$httpBackend.whenGET(/^(?!api).*$/).passThrough();

	var users = [
		{id: 1, name: "user1", email: "user1@example.com"},
		{id: 2, name: "user2", email: "user2@example.com"},
		{id: 3, name: "user3", email: "user3@example.com"},
	];

	$httpBackend.when("GET", 'api/v1/users').respond(function(method, url, data){
		console.log(arguments);
		return [200, users, {}];
	});

	$httpBackend.whenGET(/api\/v1\/users\/\d+/).respond(function(method, url, data){
		console.log(arguments);
		return [200, users[0], {}];
	});

})