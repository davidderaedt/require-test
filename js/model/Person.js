/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $ */

define(["model/AbsModel"], function (AbsModel) {
    "use strict";

	var Person = function (pFirstname, pLastname, pId) {
	
		this.id = pId;

		this.firstname = pFirstname;
		this.lastname = pLastname;

	};

	Person.prototype = new AbsModel();

	Person.prototype.getFullName = function () {
		return this.firstname + " " + this.lastname;
	};

	return Person;

});
