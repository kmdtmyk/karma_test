"use strict";

describe("UserController", function(){

	beforeEach(module("my.controller.user"));

	describe("index", function(){

		var scope;
		var controller;

		beforeEach(inject(function($controller){
			scope = {};
			controller = $controller("UserIndexController", {$scope: scope});
		}));

		it("increment", function(){
			expect(scope.count).toBe(0);
			scope.increment();
			expect(scope.count).toBe(1);
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