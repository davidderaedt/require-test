define([
"my/Observer"
], 
function(Observer){


	function AbsModel(){

	}
	AbsModel.prototype =  new Observer();

	AbsModel.prototype.toString = function(){
		return "Object AbsModel";
	};

	return AbsModel;


});
