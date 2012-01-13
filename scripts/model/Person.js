define(
["model/AbsModel"], 
function(AbsModel){


	return function Person (pFirstname, pLastname, pId){
	
		var o=new AbsModel();
		o.id=pId;

		o.firstname= pFirstname;
		o.lastname = pLastname;

		o.getFullName = function(){
			return o.firstname +" "+o.lastname;
		};

		return o;
	}

});
