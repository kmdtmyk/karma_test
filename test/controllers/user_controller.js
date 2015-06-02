"use strict";

describe("UserController", function(){

	var httpBackend;
	var User;

	beforeEach(function(){
		module("my.controller.user");
		inject(function($httpBackend){
			httpBackend = $httpBackend;
		});

		inject(function(_User_){
			User = _User_;
		});
	});

	describe("index", function(){

		var scope;
		var controller;

		beforeEach(inject(function($controller){
			scope = {};
			controller = $controller("UserIndexController", {$scope: scope});
		}));

		
		it("user list", function(){
			//expect(scope.count).toBe(0);
			//scope.increment();
			//expect(scope.count).toBe(1);
			var data = [
				{id: 1, name: "user1"},
				{id: 2, name: "user2"},
				{id: 3, name: "user3"},
			];

			httpBackend.expectGET("api/v1/users").respond(data);

			var users = User.query();
			expect(users.length).toEqual(0);
			// httpBackend.flush();
			// expect(users.length).toEqual(3);
			//expect(users[0]).toEqual(data[0]);

		});
		

	});


	describe("edit", function(){

		var scope;
		var controller;

		beforeEach(inject(function($controller){
			scope = {};
			controller = $controller("UserEditController", {$scope: scope});
		}));



	});



});