"use strict";

describe("UserController", function(){

	beforeEach(module("my.controller.user"));

	describe("index", function(){

		it("test", inject(function($controller){
			var scope = {};
			var controller = $controller("UserIndexController", {$scope: scope});
			expect(scope.test).toBe("user");
		}));
	});


});