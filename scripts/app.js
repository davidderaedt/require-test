define([
"jquery",
"model/Person",
"model/contactAppModel",
"view/contactListView",
"view/selectedContactView",
"my/utils"
], 
function ($, Person, contactAppModel, contactListView, selectedContactView, utils, Car) {


	var o={};
 

 	o.init = function (){

	 	console.log(utils.sayHello());

		contactListView.setContactCollec(contactAppModel.contactCollec);

	 	contactListView.bind("contactSelected", contactSelectedHandler);
	 	contactListView.bind("createContact", createContactHandler);

	 	selectedContactView.bind("removeContact", removeContactHandler);
	 	selectedContactView.bind("saveContact", saveContactHandler);
	 	
		contactAppModel.bind("contactsLoaded", contactListLoadedHandler);
		contactAppModel.bind("selectionChanged", selectedContactChangedHandler);

	 	loadContactData();
	

 	};


 	function createContactHandler(){

 		var contact = contactAppModel.createNewContact();
 		contactListView.addContact(contact);

 		contactAppModel.selectContact(contact); 		
 	}


 	function saveContactHandler(evt, data){

 		console.log(data);
		contactAppModel.updateContact(contactAppModel.selectedContact, data);
		contactListView.render();
		contactListView.setSelection(contactAppModel.selectedContact, true);
 	}



 	function removeContactHandler(){

 		contactListView.removeContact(contactAppModel.selectedContact);
 		contactAppModel.removeContact(contactAppModel.selectedContact);

 		var firstcontact=contactAppModel.contactCollec[0];
 		contactAppModel.selectContact(firstcontact);

 	}


	function loadContactData(){
		
		contactAppModel.loadContactData();
	}

			
	function contactListLoadedHandler(){

		console.log("contacts loaded");
		contactListView.render();
	}


	function contactSelectedHandler(){

		contactAppModel.selectContact(contactListView.selectedContact);

	}


	function selectedContactChangedHandler(){

		contactListView.setSelection(contactAppModel.selectedContact);
		selectedContactView.setContact(contactAppModel.selectedContact);

	}
 
 
	return o;

});