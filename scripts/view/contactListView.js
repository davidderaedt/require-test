define([
"jquery",
"view/AbsView"
], 
function ($, AbsView) {


	var o= new AbsView();
	o.el = $("#contactPanel");
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

		var ul = o.el.find("ul");
		ul.html("");
		
		$.each(o.contactCollect, function(index, contact){
			console.log(contact.getFullName());
 			o.addContact(contact);

 		});

	}

	o.addContact=function(contact){

		var contactElt = $(document.createElement('li'));
 		contactElt.html('<li data-contactid="'+contact.id+'">'+contact.getFullName()+"</li>");

 		var ul = o.el.find("ul");
 		ul.append(contactElt);

 		$(contactElt).on("click", function(evt){
 			o.UISelectHandler($(evt.target).attr("data-contactid"));
 		});		
	}


	o.UISelectHandler = function(pContactId){
		console.log(pContactId);
		o.trigger("selectContactId", pContactId);
	}



	o.setSelection=function (pContact){

		o.selectedContact = pContact;

		var elt = $('[data-contactid="'+pContact.id+'"]');
		$(".selection").removeClass("selection");
		elt.addClass("selection");

	}
 
 	
 	o.initialize();

	return o;

});