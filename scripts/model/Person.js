define(
["model/AbsModel"], 
function(AbsModel){


	var Person = function (pFirstname, pLastname, pId){
	
		this.id=pId;

		this.firstname= pFirstname;
		this.lastname = pLastname;

	};

	Person.prototype = new AbsModel();

	Person.prototype.getFullName = function(){
		return this.firstname +" "+this.lastname;		
	}

	return Person;

});
