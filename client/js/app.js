var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var ContentLayout = require('./views/content.layout');

var Minutes = new Marionette.Application();

Minutes.on('before:start', function() {
  var RootView = Marionette.LayoutView.extend({
    el: '#app-container',

    regions: {
      header: '#header-region',
      content: '#content-region'
    }
  });

  Minutes.root = new RootView();
});

// Start history when our application is ready
Minutes.on('start', function() {
  Minutes.root.content.show(new ContentLayout());
  // Minutes.regions.header.show(new HeaderView());
  Backbone.history.start();
});

module.exports = Minutes;
