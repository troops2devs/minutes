var Marionette = require('backbone.marionette');
var template = require('../../templates/student.list.hbs');
var StudentView = require('./student.js');

var StudentList = Marionette.CompositeView.extend({
  tagName: 'table',
  template: template,
  childView: StudentView,
  childViewContainer: 'tbody',

  initialize: function() {
  }
});

module.exports = StudentList;
