"use strict";

angular.module("my.mock",
	[
		"ngMockE2E", 
		"my.mock.user"
	]
)


.run(function($httpBackend){

	$httpBackend.whenGET(/^(?!api).*$/).passThrough();

});

