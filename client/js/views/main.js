var Marionette = require('backbone.marionette');
var template = require('../../templates/main.hbs');
var StudentView = require('./student.js');

var MainView = Marionette.CompositeView.extend({
  tagName: 'table',
  id: 'students-list',
  template: template,
  childView: StudentView,
  childViewContainer: 'tbody',

  initialize: function() {
  }
});

module.exports = MainView;
