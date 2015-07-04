var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var ContentLayout = require('./views/content.layout');
var User = require('./models/user');

var Minutes = new Marionette.Application();

Minutes.on('before:start', function(options) {
  var RootView = Marionette.LayoutView.extend({
    el: '#app-container',

    regions: {
      content: '#content-region'
    }
  });

  Minutes.root = new RootView();
});

// Start history when our application is ready
Minutes.on('start', function(options) {
  var user = new User(options.user);
  var contentLayout = new ContentLayout({model: user});
  Minutes.root.content.show(contentLayout);
  Backbone.history.start();
});

module.exports = Minutes;
