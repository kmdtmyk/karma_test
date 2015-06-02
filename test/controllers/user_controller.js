"use strict";

describe("UserController", function(){

	var httpBackend;
	var scope;
	var controller;
	var routeParams;

	beforeEach(function(){
		module("my.controller.user");
		inject(function($httpBackend){
			httpBackend = $httpBackend;
		});

	});

	describe("index", function(){

		beforeEach(inject(function($controller){
			scope = {};
			controller = $controller("UserIndexController", {
				$scope: scope,
				$routeParams: {}
			});
		}));

		
		it("user list", function(){

			var users = [
				{id: 1, name: "user1"},
				{id: 2, name: "user2"},
				{id: 3, name: "user3"},
			];

			httpBackend.expectGET("api/v1/users").respond(users);

			//var users = User.query();
			expect(scope.users.length).toEqual(0);
			httpBackend.flush();
			expect(scope.users.length).toEqual(3);
			expect(angular.equals(scope.users, users)).toBeTruthy();

			//expect(users[0]).toEqual(data[0]);

		});
		

	});


	describe("show", function(){

		beforeEach(inject(function($controller){
			scope = {};
			routeParams = {id: 1};
			controller = $controller("UserShowController", {
				$scope: scope,
				$routeParams: routeParams
			});
		}));


		it("user show", function(){

			var user = 	{id: 1, name: "user1"};

			httpBackend.expectGET("api/v1/users/1").respond(user);

			expect(scope.user).toBeUndefined();
			httpBackend.flush();
			expect(angular.equals(scope.user, user)).toBeTruthy();

		});

	});


	describe("edit", function(){

		beforeEach(inject(function($controller){
			scope = {};
			controller = $controller("UserEditController", {$scope: scope});
		}));


	});



});