define([
"jquery"
], 
function($){


	return function AbsView (){
	
		var o=$({});

		o.toString = function(){
			return "Object AbsView";
		};

		return o;
	}

});
