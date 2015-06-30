var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var HeaderView = require('./views/header');

var Minutes = new Marionette.Application();

Minutes.on('before:start', function() {
  var RegionContainer = Marionette.LayoutView.extend({
    el: '#app-container',

    regions: {
      header: '#header-region',
      main: '#main-region'
    }
  });

  Minutes.regions = new RegionContainer();
});

// Start history when our application is ready
Minutes.on('start', function() {
  Minutes.regions.header.show(new HeaderView());
  Backbone.history.start();
});

// Load some initial data, and then start our application
// loadInitialData().then(app.start);
module.exports = Minutes;
