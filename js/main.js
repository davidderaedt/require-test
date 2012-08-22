/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global require */

require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        text: 'libs/require/text',
        templates: '../templates'
    }
});


require(["appController"], function (appController) {
    "use strict";
	appController.init();

});