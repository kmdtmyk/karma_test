"use strict";

describe("directive ", function(){

	var compile;
	var rootScope;

	beforeEach(function(){
		module("my.directive.navbar");

		inject(function($compile, $rootScope){
			compile = $compile;
			rootScope = $rootScope;
		});
	});


	it("navbar", function(){
		var element = compile("<navbar ></navbar>")(rootScope);
		// console.log(element);
		// console.log(element.html());
		rootScope.$digest();
		// console.log(element.html());
	});

});
