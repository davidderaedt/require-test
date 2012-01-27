require.config({
  paths: {

    jquery: 'libs/jquery/jquery-min',
    text: 'libs/require/text',
    templates: '../templates'
  }

});


require(["appController"], function(appController) {

	appController.init();

});