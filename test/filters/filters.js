"use strict";

describe("filter", function(){

	var filter;

	beforeEach(function(){
		module("my.filter");

		inject(function($filter){
			filter = $filter("honorific");
		});
	});

	it("honorific", function(){
		expect(filter("name")).toBe("name様");
		expect(filter("")).toBe("");
	});

});
