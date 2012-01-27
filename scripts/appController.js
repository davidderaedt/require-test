define([
"model/Person",
"model/contactAppModel",
"view/contactListView",
"view/selectedContactView",
"my/utils"
], 
function (Person, contactAppModel, contactListView, selectedContactView, utils) {


	var o={};
 

 	o.init = function (){

	 	console.log("App initializing");

		contactListView.setContactCollec(contactAppModel.contactCollec);

	 	contactListView.bind("selectContactId", selectContactHandler);
	 	contactListView.bind("createContact", createContactHandler);

	 	selectedContactView.bind("removeContact", removeContactHandler);
	 	selectedContactView.bind("saveContact", saveContactHandler);

		contactAppModel.bind("contactsLoaded", contactListLoadedHandler);	
		contactAppModel.bind("selectionChanged", contactSelectedHandler);	 	
		contactAppModel.bind("contactCreated", contactCreatedHandler);	 	
		contactAppModel.bind("contactUpdated", contactUpdatedHandler);	 	
		contactAppModel.bind("contactRemoved", contactRemovedHandler);	 	

	 	loadContactData();
	
 	};



	function loadContactData(){		
		contactAppModel.loadContactData();
	}
	function contactListLoadedHandler(){
		console.log("contacts loaded");
		contactListView.render();
	}



 	function selectContactHandler(evt, pContactId){
 		contactAppModel.selectContactById(pContactId);  
 	}
	function contactSelectedHandler(){
		contactListView.setSelection(contactAppModel.selectedContact);
		selectedContactView.setContact(contactAppModel.selectedContact);
	}
 


 	function createContactHandler(){
 		contactAppModel.createNewContact();
 	}
 	function contactCreatedHandler(evt, pContact){
 		contactListView.addContact(pContact); 		
 	}



 	function saveContactHandler(evt, data){
		contactAppModel.updateContact(contactAppModel.selectedContact, data);
 	}
 	function contactUpdatedHandler(evt, data){
		contactListView.render();
		contactListView.setSelection(contactAppModel.selectedContact, true); 		
 	}



 	function removeContactHandler(){
 		contactAppModel.removeContact(contactAppModel.selectedContact);
 	}
 	function contactRemovedHandler(evt, pContact){
 		contactListView.removeContact(pContact);
 	}

 
	return o;

});