var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var HeaderView = require('./views/header');
var MainView = require('./views/main');
var Student = require('./models/student');
var StudentsCollection = require('./collections/students');

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
  var students = new StudentsCollection([
    new Student({name: 'rufus', log: 22}),
    new Student({name: 'omar', log: 82}),
    new Student({name: 'fred', log: 92})
  ]);
  Minutes.regions.main.show(new MainView({collection: students}));
  Minutes.regions.header.show(new HeaderView());
  Backbone.history.start();
});

// Load some initial data, and then start our application
// loadInitialData().then(app.start);
module.exports = Minutes;
