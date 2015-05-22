"use strict";

angular.module("my.filter", [])

.filter("honorific", function(){
	return function(name){
		if(!name){
			return "";
		}
		return name + "様";
	};
});
