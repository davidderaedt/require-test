define([
"my/Observer"
], 
function(Observer){


	function AbsView (){
	
	}
	AbsView.prototype = new Observer();

	return AbsView;

});
