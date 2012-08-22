/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $ */

define(["my/Observable"], function (Observable) {
    "use strict";
    
	function AbsView() {
	}
    
	AbsView.prototype = new Observable();

	return AbsView;

});
