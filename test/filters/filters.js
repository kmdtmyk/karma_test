"use strict";

describe("filter", function(){

	beforeEach(module("my.filter"));

	describe("honorific", function(){
		it("test", inject(function(honorificFilter){
			expect(honorificFilter("name")).toBe("name様");
			expect(honorificFilter("")).toBe("");
		}));
	});

});
