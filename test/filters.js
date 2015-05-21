"use strict";

describe("filter", function(){

	beforeEach(module("myFilter"));

	describe("honorific", function(){
		it("test", inject(function(honorificFilter){
			expect(honorificFilter("name")).toBe("name様");
			expect(honorificFilter("")).toBe("");
		}));
	});

});
