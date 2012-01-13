define([
"jquery",
"model/Person",
"model/AbsModel",
], 
function ($, Person, AbsModel) {


	var o=$(new AbsModel());
	o.contactCollec = [];
	o.selectedContact=null;


	o.loadContactData=function(){

		$.getJSON("ContactData.json", function (data){

			$.each(data.items, function(index, item){
				var p = new Person(item.firstname, item.lastname, item.pid);
				//console.log("creating "+p.getFullName());
				o.contactCollec.push(p);
			});

			o.trigger("contactsLoaded");

			o.selectContact(o.contactCollec[0]);

		});
	};


	o.createContact = function(pContact){
		o.contactCollec.push(pContact);
		return pContact;
	}


	o.createNewContact = function(){
		var id = Math.floor(Math.random()*0xFFFFFF);
		var contact = new Person("firstname", "lastname", id);
		o.createContact(contact);
		return contact;
	}

	o.updateContact = function(contact, newValues){
		contact.firstname = newValues.firstname;
		contact.lastname = newValues.lastname;
	}


	o.removeContact = function(pContact){

		var i= o.contactCollec.indexOf(pContact);
		o.contactCollec.splice(i, 1);
	}


	o.selectContact = function(pContact){
		o.selectedContact = pContact;
		console.log("selection: "+o.selectedContact.getFullName());
		o.trigger("selectionChanged");
	};
 
	return o;

});