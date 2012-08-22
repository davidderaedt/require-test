/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $ */

define(["jquery", "model/Person", "model/AbsModel"], function ($, Person, AbsModel) {
    "use strict";

	var o = new AbsModel();
	o.contactCollec = [];
	o.selectedContact = null;


	o.loadContactData = function () {

		$.getJSON("ContactData.json", function (data) {

			$.each(data.items, function (index, item) {
				var p = new Person(item.firstname, item.lastname, item.pid);
				//console.log("creating "+p.getFullName());
				o.contactCollec.push(p);
			});

			o.trigger("contactsLoaded");

			o.selectContact(o.contactCollec[0]);

		});
	};


	o.createContact = function (pContact) {
		o.contactCollec.push(pContact);
		o.trigger("contactCreated", pContact);
		o.selectContact(pContact);
		return pContact;
	};


	o.createNewContact = function () {
		var id = Math.floor(Math.random() * 0xFFFFFF);
		var contact = new Person("firstname", "lastname", id);
		o.createContact(contact);
		return contact;
	};


	o.updateContact = function (contact, newValues) {
		contact.firstname = newValues.firstname;
		contact.lastname = newValues.lastname;
		o.trigger("contactUpdated", contact);
		o.selectContact(contact);
		return contact;
	};


	o.removeContact = function (pContact) {
		var i = o.contactCollec.indexOf(pContact);
		o.contactCollec.splice(i, 1);
		o.trigger("contactRemoved", pContact);
		o.selectContact(o.contactCollec[0]);
	};


	o.getContactById = function (pContactId) {

		var n = o.contactCollec.length;
        var i;
		for (i = 0; i < n; i++) {
			var c = o.contactCollec[i];
			if (c.id === Number(pContactId)) {
                return c;
            }
		}
		return null;
	};

	o.selectContactById = function (pContactId) {
		
		var contact = o.getContactById(pContactId);
		if (contact === null) {
            console.log("not found");
        } else {
            o.selectContact(contact);
        }
	};


	o.selectContact = function (pContact) {
		o.selectedContact = pContact;
		console.log("model selection: " + pContact.firstname);
		o.trigger("selectionChanged");
	};
 
	return o;

});