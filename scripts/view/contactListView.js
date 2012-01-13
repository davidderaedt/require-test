define([
"jquery",
"view/AbsView"
], 
function ($, AbsView) {


	var o= new AbsView();
	o.el = $("#contacts");
	o.contactCollect={};
	o.selectedContact={};

	o.initialize= function (){

		console.log("contact list init");

		$("#createContactBt").on("click", createContactBtClickHandler);

	}

	function createContactBtClickHandler(){

		o.trigger("createContact");

	}

	o.setContactCollec=function (pCollec){

		o.contactCollect = pCollec;

		o.render();

	}

	o.removeContact=function(pContact){

		var elt = $('[data-contactid="'+pContact.id+'"]');
		$(elt).parent().remove();

	}

	o.render=function(){

		o.el.html("");
		
		$.each(o.contactCollect, function(index, contact){
			console.log(contact.getFullName());
 			o.addContact(contact);

 		});

	}

	o.addContact=function(contact){

		var contactElt = $(document.createElement('li'));
 		contactElt.html('<li data-contactid="'+contact.id+'">'+contact.getFullName()+"</li>");

 		o.el.append(contactElt);

 		$(contactElt).on("click", function(){
 			o.setSelection(contact, true);
 		});		

 		o.setSelection(contact, false);
	}



	o.setSelection=function (pContact, fromUI){

		o.selectedContact = pContact;
		var elt = $('[data-contactid="'+pContact.id+'"]');

		$(".selection").removeClass("selection");
		elt.addClass("selection");

		if(fromUI==true) o.trigger("contactSelected");

	}
 
 	
 	o.initialize();

	return o;

});