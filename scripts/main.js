require.config({
  paths: {

    jquery: 'libs/jquery/jquery-min',
    text: 'libs/require/text',
    templates: '../templates'
  }

});


require(["app"], function(app) {

	app.init();

});