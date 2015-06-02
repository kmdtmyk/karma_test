"use strict";

angular.module("my.mock.user",
	["ngMockE2E"]
)


.run(function($httpBackend){


	var users = [
		{id: 1, name: "user1", email: "user1@example.com"},
		{id: 2, name: "user2", email: "user2@example.com"},
		{id: 3, name: "user3", email: "user3@example.com"},
	];

	$httpBackend.when("GET", 'api/v1/users').respond(function(method, url, data){
		console.log(arguments);
		return [200, users, {}];
	});

	$httpBackend.when("POST", 'api/v1/users').respond(function(method, url, data){
		console.log(arguments);
		var user = angular.fromJson(data);
		user.id = users.length + 1;
		users.push(user);
		return [200, {}, {}];
	});

	var showRegexp = /api\/v1\/users\/(\w+)/;
	$httpBackend.whenGET(showRegexp).respond(function(method, url, data){
		console.log(arguments);
		url.match(showRegexp);
		var id = RegExp.$1;
		for(var i = 0; i < users.length; i++){
			if(id == users[i].id){
				return [200, users[i], {}];
			}
		}
		return [404, {}, {}];
	});

});