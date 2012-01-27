define([
"jquery",
"view/AbsView"
], 
function ($, AbsView) {


	var o=new AbsView();
	o.el = $("#selectedContact");


	contact={};


	o.init = function(){
		$("#removeContactBt").on("click", removeContactBtHandler);
		$("#saveContactBt").on("click", saveContactBtHandler);		
	}


	function removeContactBtHandler(){
		o.trigger("removeContact");	
	};

	function saveContactBtHandler(){
		var contactData={
			firstname:$("#firstnameInput").attr("value"), 
			lastname:$("#lastnameInput").attr("value")
		};
		o.trigger("saveContact", contactData);			
	}

	o.setContact = function (pContact){
		contact = pContact;
		o.render();
	};

	o.getContact = function (){
		return contact;
	};


	o.render=function(){

		var content="";

		$("#contactIdInput").html(contact.id);

		$("#firstnameInput").attr("value", contact.firstname);
		$("#lastnameInput").attr("value", contact.lastname);

	}

	o.init();
 
	return o;

});