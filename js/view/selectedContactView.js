/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $ */

define(["jquery", "view/AbsView"],  function ($, AbsView) {
    "use strict";

	var o = new AbsView();
	o.el = $("#selectedContact");


	var contact = {};



	function removeContactBtHandler() {
		o.trigger("removeContact");
	}

	function saveContactBtHandler() {
		var contactData = {
			firstname: $("#firstnameInput").attr("value"),
			lastname: $("#lastnameInput").attr("value")
		};
		o.trigger("saveContact", contactData);
	}

	o.setContact = function (pContact) {
		contact = pContact;
		o.render();
	};

	o.getContact = function () {
		return contact;
	};


	o.render = function () {

		var content = "";

		$("#contactIdInput").html(contact.id);

		$("#firstnameInput").attr("value", contact.firstname);
		$("#lastnameInput").attr("value", contact.lastname);

	};

	o.init = function () {
		$("#removeContactBt").on("click", removeContactBtHandler);
		$("#saveContactBt").on("click", saveContactBtHandler);
	};
    
	o.init();
 
	return o;

});