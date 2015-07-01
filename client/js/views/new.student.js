var Marionette = require('backbone.marionette');
var template = require('../../templates/new.student.hbs');

var NewStudentForm = Marionette.ItemView.extend({
  tagName: 'form',
  template: template
});

module.exports = NewStudentForm;
