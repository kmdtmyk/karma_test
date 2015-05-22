"use strict";

angular.module("my.directive.navbar", [])

.directive("navbar", function(){

	return{
		restrict: "AE",
		template: "navbar"
	}

});