"use strict";

angular.module("myFilter", [])

.filter("honorific", function(){
	return function(name){
		if(!name){
			return "";
		}
		return name + "様";
	};
});
